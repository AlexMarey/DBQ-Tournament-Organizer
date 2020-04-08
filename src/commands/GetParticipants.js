const challonge = require('../utilities/getData');

module.exports = {
    name: "view-players",
    description: "",
    args: false,
    usage: "",
    help: "",
    execute(message) {
        const challonge_url = `https://${process.env.CHALLONGE_USERNAME}:${process.env.CHALLONGE_TOKEN}@api.challonge.com/v1/tournaments/${tournamentID}/participants.json`

        challonge.getData(challonge_url).then((res) => {
            if(res.status == 200) {
                message.channel.send(`Something happened!`);
                console.log(JSON.stringify(res.body));
            } else {
                message.channel.send(`Something went wrong, you should let Hondo know.`);
            }
        });

        return;
    }
};
