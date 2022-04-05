const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const coursesRouter = require('./courses.router')
const topicsRouter = require('./topics.router')

const { checkAuth } = require('../utils/index')

router.use('/users', checkAuth, usersRouter)
.use('/auth', authRouter)
.use('/courses', coursesRouter)
.use('/topics', topicsRouter)

module.exports = router
