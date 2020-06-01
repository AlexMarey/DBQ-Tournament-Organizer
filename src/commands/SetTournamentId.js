const state = require('../state/state');

module.exports = {
  name: "set-id",
  description: "Set the tournament ID for a challonge bracket",
  args: true,
  usage: "<id>",
  requiresAdmin: true,
  execute(message, args) {
    if (args.length > 1) {
      message.channel.send("The Id should not contain any spaces.");
      return;
    }
    tournamentID = args[0];

    try {
      state.setTournamentId(tournamentID);
      message.channel.send(`Saved "${tournamentID}" as the tournament ID`);
    } catch (error) {
      console.log(error);
      message.channel.send(`An error occured when trying to set the tournament Id.`)
    }
  },
};
