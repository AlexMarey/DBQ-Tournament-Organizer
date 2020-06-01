module.exports = {
    state: {
        tournamentId: '',
        players: []
    },
    setTournamentId(id) {
        this.state = {
            ...this.state,
            tournamentId: id,
        };
    },
    getTournamentId(callback) {
        callback(this.state.tournamentId);
    },
}