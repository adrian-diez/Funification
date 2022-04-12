const router = require('express').Router()


const { createUser,
    getAllUsers,
    updateUser,
    deleteUserById,
    getStudents,
    getUserById,
    getUserCourses,
    getMyCourses,
    getMyCoursesStudents
} = require('../controllers/user.controller')

router.post('/', createUser)
.get('/', getAllUsers)
.get('/students', getStudents)
.get('/my-courses', getMyCourses)
.get('/my-courses-pop', getMyCoursesStudents)
.get('/:userId', getUserById)
.get('/:userId/courses', getUserCourses)
.put('/:userId', updateUser)
.delete('/:userId', deleteUserById)


module.exports = router
