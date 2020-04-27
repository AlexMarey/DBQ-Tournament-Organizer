// const utilities = require("../utilities/postData");
const utilities = require("../utilities/challongeApi");

module.exports = {
  name: "sign-me-up",
  description:
    "Sign me up is used by a discord user to register themself for the current available tournament",
  args: false,
  usage: "",
  requiresAdmin: false,
  execute(message) {
    const challonge_url = `https://${process.env.CHALLONGE_USERNAME}:${process.env.CHALLONGE_TOKEN}@api.challonge.com/v1/tournaments/${tournamentID}/participants.json`;

    var username = message.member.user.username;
    var participant = {
      name: username
    };

    return utilities.addParticipantToTournament(challonge_url, participant, message);
  }
};
