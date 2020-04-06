const utilities = require('../utilities/postData');

module.exports = {
    name: "sign-up",
    description: "",
    args: true,
    usage: "<name>",
    help: "",
    execute(message, args) {
        const challonge_url = `https://${process.env.CHALLONGE_USERNAME}:${process.env.CHALLONGE_TOKEN}@api.challonge.com/v1/tournaments/${tournamentID}/participants.json`

        var participant = {
            "name": args.join(' ')
        }

        utilities.postData(challonge_url, participant).then((res) => {
            if(res.status == 200) {
                message.channel.send(`${name} has signed up!`);
            } else {
                message.channel.send(`Something went wrong, you should let Hondo know.`);
            }
        });

        return;
    }
};
