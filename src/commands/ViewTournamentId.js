module.exports = {
    name: "view-id",
    description: "View the current tournament ID that people are signing up for.",
    args: false,
    usage: "",
    requiresAdmin: true,
    execute(message) {
      try{
        message.channel.send(`The current id is "${tournamentID}".`);
      } catch (error) {
        message.channel.send('A tournmanet id hasn\'t been set yet.');
        console.log(error);
      }
    }
  };
  