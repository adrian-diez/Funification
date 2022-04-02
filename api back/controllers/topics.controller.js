const TopicModel = require('../models/topics.model')

const getTopics = async (req, res) => {
  try {
      const topic = await TopicModel.find()
      res.json(topic)

  } catch (error) {
      res.status(500).send(error)
  }
}

const getTopicById = async (req, res) => {
  try {
      const topic = await TopicModel.findById(req.params.topicId)
      res.json(topic)

  } catch (error) {
      res.status(500).send(error)
  }
}

const createTopic =  async (req, res) => {
  try {
      const topic = await TopicModel.create(req.body)
      res.json(topic)

  } catch (error) {
      res.status(500).send(error)
  }
}

const updateTopicById =  async (req, res) => {
  try {
      const topic = await TopicModel.findByIdAndUpdate(req.params.topicId, req.body)
      res.json(topic)

  } catch (error) {
      res.status(500).send(error)
  }
}

const deleteTopicById = async (req, res) => {
  try {
      const topic = await TopicModel.findByIdAndRemove(req.params.topicId)
      res.json({
          name : user.name,
          email : user.email,
          deleted : true
      })

  } catch (error) {
      res.status(500).send(error)
  }
}


module.exports = {
  getTopics,
  getTopicById,
  createTopic,
  updateTopicById,
  deleteTopicById
}