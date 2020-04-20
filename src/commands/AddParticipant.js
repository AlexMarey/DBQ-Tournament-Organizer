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

    try {
      utilities.postData(challonge_url, participant).then((res) => {
        res.json().then((data) => {
          console.log(data);
          message.channel.send(`${data.participant.name} has signed up`);
        })
      });
    } catch (error) {
      console.log('Error in ADD PARTICIPANT');
      message.channel.send(error);
    }

    return;
  }
};
