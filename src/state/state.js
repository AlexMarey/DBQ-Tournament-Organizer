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
    getTournamentId() {
        return this.state.tournamentId;
    },
}