require('dotenv').config()
const Client = require('./framework/objects/Client')

new Client(process.env.TOKEN, '#529DF5').start()
