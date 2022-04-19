const router = require('express').Router()

const {
    createTopic,
    getTopics,
    getTopicById,
    updateOneTopic,
    deleteOneTopic,
    getTopicsByCourseId
    } = require('../controllers/topics.controller')

router.post('/', createTopic)
    .get('/', getTopics)
    .get('/course/:courseId', getTopicsByCourseId)
    .get('/:topicId', getTopicById)
    .put('/:topicId', updateOneTopic)
    .delete('/:topicId', deleteOneTopic)

module.exports = router