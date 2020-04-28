const { prefix } = require('../../config.json');

module.exports = {
  name: "help",
  description:
    "List all available commands or gives specific help for one command",
  args: false,
  usage: "",
  requiresAdmin: false,
  execute(message, commands={}) {
    var reply = "";
    reply += "```Commands:\n";

    commands.forEach((command) => {
      if (
        command.requiresAdmin &&
        message.member.hasPermission("ADMINISTRATOR")
      ) {
        reply += formatReply(command);
      } else {
        reply += formatReply(command);
      }
    });
    reply += `\nNote: all commands must be prefixed with '${prefix}'.` + '\n```';

    message.channel.send(reply);
  },
};

function formatReply(command) {
  let reply = `  ${prefix}${command.name}`;
  reply += command.usage != "" ? ` ${command.usage}` : "";
  reply += `: ${command.description} \n`;
  return reply;
}
