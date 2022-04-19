const router = require('express').Router()

const {
    signup,
    login,
    check,
    me
} = require('../controllers/auth.controller')

const {checkAuth} = require('../utils/index')

router.post('/signup', signup)
.post('/login', login)
.get('/check', check)
.get('/me', checkAuth, me)

module.exports = router 