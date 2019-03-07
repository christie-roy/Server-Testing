const knex = require('knex');
const config = require('./knexfile.js');

const dbEnv = process.env.DB_ENV || 'development';

module.epoxrts = knex(config[dbEnv]);