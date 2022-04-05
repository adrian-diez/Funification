const router = require('express').Router()

/*const {
    checkAuth,
    checkAdmin
} = require('../utils/index')*/

const { createUser,
    getAllUsers,
    updateUser,
    deleteUserById,
    getStudents,
    getUserById
} = require('../controllers/user.controller')

router.post('/', createUser)
.get('/', getAllUsers)
.get('/students', getStudents)
.get('/:userId', getUserById)
.put('/:userId', updateUser)
.delete('/:userId', deleteUserById)


module.exports = router
