const router = require('express').Router()

/*const {
    checkAuth,
    checkAdmin
} = require('../utils/index')*/

const { createUser,
    getAllUsers,
    updateUser,
    deleteUserById,
    getStudents
} = require('../controllers/user.controller')

router.post('/', createUser)
.get('/', getAllUsers)
.get('/students', getStudents)
.put('/:userId', updateUser)
.delete('/:userId', deleteUserById)


module.exports = router
