require('dotenv').config();

const server = require('./server.js');
const PORT = process.env.PORT || '4000';

server.listen(PORT, () => {
    console.loh(`***\nServer Listening on Port:${PORT}\n***`);
})