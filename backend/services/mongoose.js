const mongoose = require('mongoose')
const config = require('./config')
// const log = require('./logger')

mongoose.Promise = global.Promise

mongoose
  .connect(config.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.debug('connection established to ' + config.MONGO_URL)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })

// Initialize models
// Don't forget to add models
require('../models/proposal')
const db = mongoose.connection

function shutdown () {
  db.close(function () {
    console.debug('Mongoose default connection disconnected through app termination')
    process.exit(0)
  })
}

process.on('SIGTERM', () => shutdown())
process.on('SIGINT', () => shutdown())
process.once('SIGUSR2', () => shutdown())

// Enable the mongoose debugger
// mongoose.set('debug', (coll, method, query, doc, options) => {
//   let set = {
//     coll: coll,
//     method: method,
//     query: query,
//     doc: doc,
//     options: options
//   }

//   log.debug({
//     dbQuery: set
//   })
// })

module.exports = mongoose
