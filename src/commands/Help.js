module.exports = {
    name: "help",
    description: "List all available commands or gives specific help for one command",
    args: false,
    usage: ["", "<command>"],
    execute(message, args, commands = {}) {
        console.log(commands);
        var reply = "";
        if (args.length >= 1) {
            message.channel.send(`Help command with at least 1 arg`);
        } else {
            reply += "```Commands:\n"
            commands.forEach(command => {
                reply += `- ${command.name} ${command.usage}: ${command.description}\n`;
            });
            reply += "```"
        }
        message.channel.send(reply);
    }
};
