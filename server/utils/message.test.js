var expect = require('expect');

var {
    generateMessage
} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'john';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from,
            text
        });
    });
});


describe('generateLocationMessage', () => {
    it('should generate correct location odject'), () => {
        var from = 'Deb';
        var latitude = 15;
        var longitude = 19;
        var url = 'https://www.google.com/map?q=15,19';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBe('number');
        expect(message).toMatchobject({
            from,
            url
        });
    };
});