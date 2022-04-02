const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')

router.use('/users', usersRouter)
.use('/auth', authRouter)

module.exports = router