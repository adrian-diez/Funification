const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please input a topic name']
    },
    theory: [{
        type: String,
        default: []
    }],
    questions: [{
        question: {
            type: String
        },
        answers: [{
            suggestion: {
                type: String
            },
            correct: {
                type: Boolean,
                default: false
            }
        }],
    }],
})

const TopicModel = mongoose.model('topic', topicSchema)
module.exports = TopicModel