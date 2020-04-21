const utilities = require("../utilities/postData");

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

    utilities.postData(challonge_url, participant)
      .then((data) => {
        message.channel.send(`${data.participant.name} has signed up`);
      })
      .catch((err) => {
        console.log("---------- ERROR: ADD_PARTICIPANT ------------");
        console.log(err);
        message.channel.send('An error occurred!')
      });
    return;
  }
};
