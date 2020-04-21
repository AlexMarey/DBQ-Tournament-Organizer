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
          console.log(`Data recieved from postData call`);
          message.channel.send(`${data.participant.name} has signed up`);
      })
      .catch((err) => {
        // 500: Problem with Challonge
        // 422: User already signed up
        // 404: Not found within account scope
        // 401: Unauthorized
        console.log(`---------- ${err.response.status} ERROR in ADD_PARTICIPANT ------------`);
        console.log(err.response.status);
        message.channel.send(`Caught Error: ${err.response.status}!`);
      });
    return;
  }
};
