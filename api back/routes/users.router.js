const router = require('express').Router()

const {
    checkAuth
} = require('../utils/index')

const { createUser,
    getAllUsers,
    updateUser,
    deleteUserById,
    getStudents,
    getUserById,
    getUserCourses,
    getMyCourses
} = require('../controllers/user.controller')

router.post('/', createUser)
.get('/', getAllUsers)
.get('/students', getStudents)
.get('/my-courses', getMyCourses)
.get('/:userId', getUserById)
.get('/:userId/courses', getUserCourses)
.put('/:userId', updateUser)
.delete('/:userId', deleteUserById)


module.exports = router
