const router = require('express').Router()

const { createCourse, getCourses, getCourseById, updateOneCourse, deleteOneCourse } = require('../controllers/courses.controller')

router.post('/', createCourse)
.get('/', getCourses)
.get('/:courseId', getCourseById)
.put('/:courseId', updateOneCourse)
.delete('/:courseId', deleteOneCourse)

module.exports = router