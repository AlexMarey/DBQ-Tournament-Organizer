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

    utilities.postData(challonge_url, participant)
      .then((data) => {
          console.log(`Data recieved from postData call`);
          message.channel.send(`${data.participant.name} has signed up`);
      })
      .catch((err) => {
        let status = err.response.status;
        if(status >= 500 && status < 600) {
          // 500: Problem with Challonge
          message.reply('There\'s a problem with Challonge right now. Try again later.');
        } else if (status===422) {
          // 422: User already signed up
          message.reply('That player has already signed up!');
        } else if (status===401) {
          // 401: Unauthorized
          message.reply('I\'m not authorized to do that.');
        } else {
          message.reply('There was an error with your request. Try again later.')
        }
        console.log(`---------- ${err.response.status} ERROR in ADD_PARTICIPANT ------------`);
        console.log(`Caught Error: ${err.response.status}!`);
      });

    return;
  }
};
