module.exports = {
    state: {
        tournamentId: '',
        players: []
    },
    getState() {
        return this.state;
    },
    setState(newState) {
        this.state = newState;
    }
}