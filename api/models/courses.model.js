const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please input a course name']
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }],
  topics: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tests'
  }],
  teachers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }],
  img: {
    type: String
  }
})

const CourseModel = mongoose.model('course', courseSchema)
module.exports = CourseModel