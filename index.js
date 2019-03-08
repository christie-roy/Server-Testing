require ('dotenv').config();

const server = require('./server/server.js');

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Port running on port ${port}`));