const TopicModel = require('../models/topics.model')

const createTopic = async (req, res) => {
    try {
        const topic = await TopicModel.create(req.body)
        res.status(200).json(topic)
    }
    catch (error) {
        res.status(500).send(error)
    }

}

const getTopics = async (req, res) => {
    try {
        const topic = await TopicModel.find()
        res.status(200).json(topic)
    }
    catch (error) {
        res.status(500).send(error)
    }
}

const getTopicById = async (req, res) => {
    try {
        const topic = await TopicModel.findById(req.params.topicId)
        res.status(200).json(topic)
    }
    catch (error) {
        res.status(500).send(error)
    }
}

const updateOneTopic = async (req, res) => {
    try {
        const topic = await TopicModel.findByIdAndUpdate(req.params.topicId, req.body)
        res.status(200).json(topic)
    }
    catch (error) {
        res.status(500).send(error)
    }
}

const deleteOneTopic = async (req, res) => {
    try {
        const topic = await TopicModel.findByIdAndRemove(req.params.topicId)
        res.json({
            deleted: true,
            topic
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createTopic,
    getTopics,
    getTopicById,
    updateOneTopic,
    deleteOneTopic
}