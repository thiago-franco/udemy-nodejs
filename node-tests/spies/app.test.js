const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy corretly', () => {
        var spy = expect.createSpy();
        spy('Thiago', 22);
        expect(spy).toHaveBeenCalledWith('Thiago', 22);
    });

    it('should call saveUser with user object', () => {
        var email = 'myemail@provider.com';
        var password = '12345';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    })

}); 