const DBAL = require('./application');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT;  

const dbal = new DBAL(PORT);
dbal.startServer();