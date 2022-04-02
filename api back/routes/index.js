const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const coursesRouter = require('./courses.router')

router.use('/users', usersRouter)
.use('/auth', authRouter)
.use('/courses', coursesRouter)

module.exports = router
