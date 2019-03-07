const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    it('should be a testing env', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })
});

describe('GET /', () => {
    it('should return 200', () => {
        return request(server)
        .get('/')
        .then(res => {
            expect(res.status).toBe(200);
        });
    });

    it('should return JSON', async () => {
        const res = await request(server).get('/');
        expect(res.type).toBe('application/json');
    })

    it('should return a msg', async () => {
        const res = await request(server).get('/');
        expect(res.body).toEqual({ msg: 'running!'});
    })
})