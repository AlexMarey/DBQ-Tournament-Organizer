const state = require('../state/state');

module.exports = {
    name: "view-id",
    description: "View the current tournament ID that people are signing up for.",
    args: false,
    usage: "",
    requiresAdmin: true,
    execute(message) {
      let id = state.getTournamentId();
      // need to wait on id before proceding. It's possible that we hit the if block before the call finishes
      let reply = "";
      if(id) {
        reply = `The current id is "${id}".`;
      } else {
        reply = 'A tournament Id has not been set yet.';
      }

      message.channel.send(reply);
    }
  };
  