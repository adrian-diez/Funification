const router = require('express').Router()

const getRandomFact = require('../controllers/funfacts.controller')

router.get('/fact', getRandomFact)

module.exports = router