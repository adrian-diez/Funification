const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        validate: {
            validator: function (v) {
                return (/\b([A-ZÀ-ÿ][-,a-z. '\\ ]{2,35})/).test(v)
            },
            message: 'Name should be between 2 and 35 characters. First letter uppercase.'
        }
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
        validate: {
            validator: function (v) {
                return (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/).test(v)
            },
            message: 'Invalid email format'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
         validate: {
           validator: function (v) {
             return (/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/).test(v)
           },
           message: 'Password must be 8 characters and include at least 1 digit'
         }
    },
    phone: {
        type: String
    },
    role: {
        type: String,
        enum: {
            values: ['Student', 'Teacher', 'Admin'],
            message: '{VALUE} is not supported'
        }
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course'
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'message'
    }],
    tests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tests'
    }],
    rewardLog: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rewardLog'
    }],
    points: {
        type: Number,
        default: 0
    },
    avatar: {
        type: String
    },
    groups: [{
        type: String
    }]
    
})

const UserModel = mongoose.model('user', userSchema)
module.exports = UserModel
