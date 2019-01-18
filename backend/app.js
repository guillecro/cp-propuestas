const express = require('express')
const session = require('express-session')
// const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const config = require('./services/config')
const mongoStore = require('./services/sessions')

// const app = express()
// app.use(morgan('combined'))
// // app.use(bodyParser.json())
// app.use(cors())
// app.use(helmet())

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/der-propuestas', { userNewUrlParser: true });
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", function(callback){
//   console.log("Connection Succeeded");
// });

// app.use('/', require('./api'))

// app.listen(process.env.PORT || 9999)

module.exports = (async () => {
  try {
    const app = express()
    // Apply middlewares
    app.use(helmet())
    app.use(cors({credentials: true}))
    app.use(compression())
    app.use(express.json())
    app.use(morgan('combined'))
    app.use(express.urlencoded({ extended: false }))
    app.use(session({
      secret: config.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      store: mongoStore
    }))
    // Apply API routes
    app.use('/api', require('./api'))
    return app.listen(config.BACKEND_PORT, (err) => {
      if (err) {
        throw err
      }
      console.log('> Ready on http://localhost:' + config.BACKEND_PORT + ' [' + config.NODE_ENV + ']')
    })
  } catch (err) {
    console.error('An error occurred, unable to start the server')
    console.error(err)
  }
})()