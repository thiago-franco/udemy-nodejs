const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(2018, -1995);
    expect(res).toBe(23).toBeA('number');
    // if(res != 23) {
    //     throw new Error(`Expected 23, got ${res}`);
    // }
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(2018,-1995, sum => {
        expect(sum).toBe(23).toBeA('number');
        done();
    });
});

it('should square the number', () => {
    var res = utils.square(10);
    expect(res).toBe(100).toBeA('number');
    // if(res != 100) {
    //     throw new Error(`Expected 100, got ${res}`);
    // }
});

it('should async square the number', (done) => {
    utils.asyncSquare(10, res => {
        expect(res).toBe(100).toBeA('number');
        done();
    });
    // if(res != 100) {
    //     throw new Error(`Expected 100, got ${res}`);
    // }
});

it('should set firstName and lastName', () => {
    var user = {};
    utils.setName(user, 'Thiago Franco');
    expect(user).toEqual({firstName: 'Thiago', lastName: 'Franco'});
});