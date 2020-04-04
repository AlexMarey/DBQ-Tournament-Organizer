module.exports = {
    name: "view-id",
    description: "",
    args: false,
    usage: "",
    help: "",
    execute(message) {
      message.channel.send(`The current id is "${tournamentID}".`);
      return;
    }
  };
  