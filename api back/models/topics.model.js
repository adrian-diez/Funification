const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema({
  name: String,
  theory: String,
  practice: String
})

const TopicModel = mongoose.model('topic', topicSchema)
module.exports = TopicModel