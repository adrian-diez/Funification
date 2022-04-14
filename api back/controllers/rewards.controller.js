const RewardModel = require('../models/rewards.model')

const createReward = async (req, res) => {
  try {
    const reward = await RewardModel.create(req.body)
    res.status(200).json(reward)
  } 
  catch (error) {
    res.status(500).send(error)
  }

}

const getRewards = async (req, res) => {
  try {
    const reward = await RewardModel.find()
    res.status(200).json(reward)
  } 
  catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
    createReward,
    getRewards
}