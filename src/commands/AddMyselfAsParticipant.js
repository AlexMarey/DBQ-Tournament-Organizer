const utilities = require("../utilities/postData");

module.exports = {
  name: "sign-me-up",
  description:
    "Sign me up is used by a discord user to register themself for the current available tournament",
  args: false,
  usage: "",
  requiresAdmin: false,
  execute(message, args) {
    const challonge_url = `https://${process.env.CHALLONGE_USERNAME}:${process.env.CHALLONGE_TOKEN}@api.challonge.com/v1/tournaments/${tournamentID}/participants.json`;

    var username = message.member.user.username;

    var participant = {
      name: username
    };

    try {
      utilities.postData(challonge_url, participant).then(res => {
        message.channel.send(`${username} has signed up!`);
      });
    } catch (error) {
      message.channel.send(error);
    }

    return;
  }
};
