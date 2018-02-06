const request = require('supertest');
const expect = require('expect');
 
var app = require('./server').app;

describe('Server', () => {
    it('should return page not found response', (done) => {
        request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not found.'
                });
            })
            .end(done);
    });
    
    it('should return array of users', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'Thiago',
                    age: 22
                });
            })
            .end(done);
    })
});