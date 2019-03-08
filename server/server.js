const express = require('express');

const server = express();

const avengers = require('../avengersFunctions.js');

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ msg: 'running!'});
});

server.get('/avengers', async (req, res) => {
    const heroes = await avengers.get();
    res.status(200).json(heroes);
});

server.post('/resource', async (req, res) => {
    res.status(201).json({ msg: 'added'});
})

server.delete('/resource/:id', async (req, res) => {
    res.status(200).json({ msg: 'deleted!'});
});

module.exports = server;