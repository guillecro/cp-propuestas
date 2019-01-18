const express = require('express')
const router = express.Router() // api/v1 route wrapper

router.use('/proposal', require('./proposal'))

module.exports = router
