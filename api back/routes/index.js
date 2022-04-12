const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const coursesRouter = require('./courses.router')
const topicsRouter = require('./topics.router')
const messageRouter = require('./messages.router')

const { checkAuth } = require('../utils/index')

router.use('/users', checkAuth, usersRouter)
.use('/auth', authRouter)
.use('/courses', coursesRouter)
.use('/topics', topicsRouter)
.use('/messages', messageRouter)

module.exports = router
