module.exports = {
    name: "view-id",
    description: "View the current tournament ID that people are signing up for.",
    args: false,
    usage: "",
    execute(message) {
      message.channel.send(`The current id is "${tournamentID}".`);
    }
  };
  