const express = require('express');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ msg: 'running!'});
});

server.get('/resource', async (req, res) => {
    res.status(200).json({ msg: 'running!'});
});

server.post('/resource', async (req, res) => {
    res.status(201).json({ msg: 'added'});
})

server.delete('/resource/:id', async (req, res) => {
    res.status(200).json({ msg: 'deleted!'});
});

module.exports = server;