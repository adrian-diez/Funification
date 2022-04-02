const router = require('express').Router()

/*const {
    checkAuth,
    checkAdmin
} = require('../utils/index')*/

const { createUser, getAllUsers, deleteUserById } = require('../controllers/user.controller')
router.post('/', createUser)
router.get('/', getAllUsers)
/*router.put('/:userId', checkAuth, checkAdmin, editOneUserRole)*/
router.delete('/:userId', deleteUserById)

module.exports = router
