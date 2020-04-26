// const utilities = require("../utilities/postData");
const utilities = require("../utilities/challongeApi");

module.exports = {
  name: "sign-up",
  description:
    "Sign up is used to register for the current available tournament",
  args: true,
  usage: "<name>",
  requiresAdmin: false,
  execute(message, args) {
    const challonge_url = `https://${process.env.CHALLONGE_USERNAME}:${process.env.CHALLONGE_TOKEN}@api.challonge.com/v1/tournaments/${tournamentID}/participants.json`;

    var name = args.join(" ");
    var participant = {
      name
    };

    return utilities.addParticipantToTournament(challonge_url, participant, message);
  }
};
