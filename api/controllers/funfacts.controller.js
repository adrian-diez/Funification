const axios = require('axios')

async function getRandomFact (req, res) {
  const fact = await axios.get('https://api.api-ninjas.com/v1/facts?limit=1', {headers: {
    'X-Api-Key': '3pyqik0OH8mAKSMgRAFf3w==k5Q8rvOs2BFQqwBQ'
  }})
  console.log(fact)
  res.status(200).json(fact.data)
}

module.exports = getRandomFact