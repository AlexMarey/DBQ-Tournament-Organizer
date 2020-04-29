const { addParticipantToTournament } = require('../../src/utilities/challongeApi');

describe('ChallongeApi', () => {
    test('Should return an error message when the url is empty', () => {
        var particpant = {
            name: 'Alex'
        };
        var url = '';
        var expectedReply = `Unsuccesfully connected to challonge. Check the tournament url and try again.`;

        var reply = addParticipantToTournament(url, particpant);

        expect(reply).toBe(expectedReply);
    });
});