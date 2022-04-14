const mongoose = require('mongoose')

const rewardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please input a topic name']
    },
    cost: [{
        type: Number,
    }],
   img: [{
       type: String
    }],
})

const RewardModel = mongoose.model('reward', rewardSchema)
module.exports = RewardModel