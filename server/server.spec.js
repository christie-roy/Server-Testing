const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    expect(process.env.DB_ENV).toBe('testing');
});

describe('GET /', () => {
    return request(server)
        .get('/')
        .then(res => {
            expect(res.status).toBe(200);
        });
})