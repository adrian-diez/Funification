const router = require('express').Router()

const { createTopic, getTopics, getTopicById, updateOneTopic, deleteOneTopic } = require('../controllers/topics.controller')

router.post('/', createTopic)
.get('/', getTopics)
    .get('/:topicId', getTopicById)
    .put('/:topicId', updateOneTopic)
    .delete('/:topicId', deleteOneTopic)

module.exports = router