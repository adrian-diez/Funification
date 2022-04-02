const router = require('express').Router()

const {
  createTopic,
  getTopics,
  getTopicById,
  updateTopicById,
  deleteTopicById
} = require('../controllers/topics.controller')

router.post('/', createTopic)
.get('/', getTopics)
.get('/:topicId', getTopicById)
.put('/:topicId', updateTopicById)
.delete('/:topicId', deleteTopicById)

module.exports = router