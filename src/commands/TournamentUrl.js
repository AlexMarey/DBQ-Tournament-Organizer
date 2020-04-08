module.exports = {
    name: "tournament",
    description: "View the url for the tournament",
    args: false,
    usage: "",
    execute(message) {
      message.channel.send(`https://www.challonge.com/${tournamentID}`);
      return;
    }
  };
  