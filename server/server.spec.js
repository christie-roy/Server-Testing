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
    });

})

describe('GET /resource', () => {
    it('should return 200', () => {
        return request(server)
        .get('/resource')
        .then(res => {
            expect(res.status).toBe(200);
        });
    });

    it('should return JSON', async () => {
        const res = await request(server).get('/resource');
        expect(res.type).toBe('application/json');
    })

    it('should return a msg', async () => {
        const res = await request(server).get('/resource');
        expect(res.body).toEqual({ msg: 'running!'});
    })
});

describe('POST /resource', () => {
    it('should return 201', () => {
        return request(server)
        .post('/resource')
        .then(res => {
            expect(res.status).toBe(201);
        });
    });

    it('should return JSON', async () => {
        const res = await request(server).get('/resource');
        expect(res.type).toBe('application/json');
    })

    it('should return a msg', async () => {
        const res = await request(server).post('/resource');
        expect(res.body).toEqual({ msg: 'added'});
    })
});

describe('DELETE /resource/:id', () => {
    it('should return 200', () => {
        return request(server)
        .delete('/resource/:id')
        .then(res => {
            expect(res.status).toBe(200);
        });
    });

    it('should return JSON', async () => {
        const res = await request(server).delete('/resource/:id');
        expect(res.type).toBe('application/json');
    })

    it('should return a msg', async () => {
        const res = await request(server).delete('/resource/:id');
        expect(res.body).toEqual({ msg: 'deleted!'});
    })
});