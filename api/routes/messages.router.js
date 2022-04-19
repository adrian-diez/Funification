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
.get('/my-messages', getMyMessages)
.get('/', getMessages)
.get('/:userId', getUserMessages)
.delete('/:messageId', deleteMessage)

module.exports = router