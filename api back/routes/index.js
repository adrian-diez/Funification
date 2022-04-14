const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const coursesRouter = require('./courses.router')
const topicsRouter = require('./topics.router')
const messageRouter = require('./messages.router')
const rewardsRouter = require('./rewards.router')

const { checkAuth } = require('../utils/index')

router.use('/users', checkAuth, usersRouter)
.use('/auth', authRouter)
.use('/courses', checkAuth, coursesRouter)
.use('/topics', topicsRouter)
.use('/messages', checkAuth, messageRouter)

module.exports = router
