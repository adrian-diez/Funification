const UserModel = require('../models/users.model')
const MessageModel = require('../models/messages.model')

const getMessages = async (req, res) => {
  try {
    const messages = await MessageModel.find()
    res.json(messages)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getUserMessages = async (req, res) => {
  try {
      const user = await UserModel
      .find({from: req.params.userId}, { _id: 1, messages: 1 })
      .populate({
          path: 'messages',
          model: 'messages'
      })
      res.json(user)
  } catch (error) {
      res.status(500).send(error)
  }
}

const getMyMessages = async (req, res) => {
  try {
      const user = await UserModel
      .find({from: res.locals.user._id}, { _id: 1, messages: 1 })
      .populate({
          path: 'messages',
          model: 'messages'
      })
      res.json(user)
  } catch (error) {
      res.status(500).send(error)
  }
}

const createMessage = async (req, res) => {
  try {
    const message = await MessageModel.create({
      from: req.body.from,
      to: req.body.to,
      content: req.body.content
    })

    const from = await UserModel.findById(req.body.from)

    const to = await UserModel.findById(req.body.to)

    from.messages.push(message)
    to.messages.push(message)


    res.json({
      from: message.from,
      to: message.to,
      content: message.content
    })

  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteMessage = async (req, res) => {
  try {
    const message = await MessageModel.findByIdAndRemove(req.params.id)

    res.json({
      to : message.to,
      content : message.content,
      deleted : true
  })

  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getMessages,
  getUserMessages,
  getMyMessages,
  createMessage,
  deleteMessage
}