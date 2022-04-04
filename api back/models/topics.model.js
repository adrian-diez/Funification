const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please input a topic name']
    },
    theory: [{
        type: String,
        required: true
    }],
    practice: [{
        type: String,
        required: true
    }],
})

const TopicModel = mongoose.model('topic', topicSchema)
module.exports = TopicModel