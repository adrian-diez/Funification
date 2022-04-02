const router = require('express').Router()

const {
    signup,
    login,
    check
} = require('../controllers/auth.controller')

// const {checkAuth} = require('../utils/auth')

router.post('/signup', signup)
.post('/login', login)
.get('/check', check)
module.exports = router 