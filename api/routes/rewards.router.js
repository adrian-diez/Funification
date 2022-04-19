const router = require('express').Router()

const {
    createReward,
    getRewards
} = require('../controllers/rewards.controller')

router.post('/', createReward)
    .get('/', getRewards)
   
module.exports = router