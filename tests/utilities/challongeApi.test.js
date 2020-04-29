const { addParticipantToTournament } = require('../../src/utilities/challongeApi');
const postData = require('../../src/utilities/postData');

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

    test('Should return an error message when the participants is empty', () => {
        var particpant = {};
        var url = 'url.com';
        var expectedReply = `I didn't catch who wanted to sign up. Try again or use a different command.`;

        var reply = addParticipantToTournament(url, particpant);

        expect(reply).toBe(expectedReply);    
    });
});