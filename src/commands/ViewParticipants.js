const utilities = require("../utilities/getData");

module.exports = {
  name: "participants",
  description:
    "View the name of all everyone who is currently signed up to play in the tournament.",
  args: false,
  usage: "",
  execute(message, args) {
    const challonge_url = `https://${process.env.CHALLONGE_USERNAME}:${process.env.CHALLONGE_TOKEN}@api.challonge.com/v1/tournaments/${tournamentID}/participants.json`
    // const challonge_url =
    //   "https://CrashCourse:JBHC0bU0ofvtIBafnurQUCPPgMK2GBRc5mPivfZB@api.challonge.com/v1/tournaments/dcoff/participants.json";

    try {
      utilities.getData(challonge_url).then(res => {
        var reply = "Current participants:\n";
        for (let i = 0; i < res.length; i++) {
          reply += `  - ${res[i].participant.name}\n`;
        }
        message.channel.send(reply);
      });
    } catch (error) {
      message.channel.send(
        "There was an error with the connection. Please try again later."
      );
    }

    return;
  }
};
