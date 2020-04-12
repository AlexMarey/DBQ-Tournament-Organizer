module.exports = {
  name: "ping",
  description: "Ping - Pong!",
  args: false,
  usage: "",
  requiresAdmin: false,
  execute(message) {
    console.log(`Command: Ping \nReplying to ${message} with 'Pong'\n`);
    message.channel.send("Pong!");
  }
};
