module.exports = {
    name: "help",
    description: "List all available commands or gives specific help for one command",
    args: false,
    usage: "",
    requiresAdmin: false,
    execute(message, args={}) {
        var reply = "";
        if (args.length >= 1) {
            message.channel.send(`Help command with at least 1 arg`);
        } else {            
            reply += "```Commands:\n"
            args.forEach(command => {
                if(command.requiresAdmin && message.member.hasPermission('ADMINISTRATOR')){
                    reply += formatReply(command);
                } else {
                    reply += formatReply(command);
            }});
            reply += "```"
        }
        message.channel.send(reply);
    }
};

function formatReply(command) {
    let reply = `  - ${command.name}`;
    reply += command.usage !='' ? ` ${command.usage}` : ''; 
    reply += `: ${command.description} \n`;
    return reply;
}
