const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'The recipient can\'t be empty.']
  },
  content: {
    type: String,
    required: [true, 'The message can\'t be empty.']
  }
})

const MessageModel = mongoose.model('message', messageSchema)

module.exports = MessageModel
