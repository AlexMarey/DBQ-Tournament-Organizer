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
    async getTournamentId() {
        return this.state.tournamentId;
    },
}