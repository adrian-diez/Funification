const CourseModel = require('../models/courses.model')

const createCourse = async (req, res) => {
  try {
    const course = await CourseModel.create(req.body)
    res.status(200).json(course)
  } 
  catch (error) {
    res.status(500).send(error)
  }

}

const getCourses = async (req, res) => {
  try {
    const course = await CourseModel.find()
    res.status(200).json(course)
  } 
  catch (error) {
    res.status(500).send(error)
  }
}

const getCourseById = async (req, res) => {
  try {
    const course = await CourseModel.findById(req.params.courseId)
    res.status(200).json(course)
  } 
  catch (error) {
    res.status(500).send(error)
  }
} 

const updateOneCourse = async (req, res) => {
  try {
    const course = await CourseModel.findByIdAndUpdate(req.params.courseId, req.body, {new: true})
    res.status(200).json(course)
  } 
  catch (error) {
    res.status(500).send(error)
  }
} 

const deleteOneCourse = async (req, res) => {
  try {
      const course = await CourseModel.findByIdAndRemove(req.params.courseId)
      res.json({
        deleted: true,
        course
      })

  } catch (error) {
      res.status(500).send(error)
  }
}

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateOneCourse,
  deleteOneCourse
}