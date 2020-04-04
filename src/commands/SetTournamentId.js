module.exports = {
  name: "set-id",
  description: "Set the tournament ID for a challonge bracket",
  args: true,
  usage: "<id>",
  help: "The id can be found in the url!\n\nhttps://challonge.com/**touranemnt_id**",
  execute(message, args) {

    if(args.length > 1) {
      message.channel.send("To many IDs have been provided!");
      return;
    }

    tournamentID = args[0];

    message.channel.send(`Saved "${tournamentID}" as the tournament ID`);
    return;
  }
};
