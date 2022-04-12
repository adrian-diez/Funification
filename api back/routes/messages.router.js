const router = require('express').Router()

const {
  getUserMessages,
  getMyMessages,
  createMessage,
  deleteMessage,
  getMessages
}
 = require ('../controllers/messages.controller')

router.post('/', createMessage)
.get('/', getMessages)
.get('/:userId', getUserMessages)
.get('/my-messages', getMyMessages)
.delete('/:messageId', deleteMessage)

module.exports = router