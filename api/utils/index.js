const jwt = require('jsonwebtoken')
const UserModel = require('../models/users.model')

async function checkAuth(req, res, next) {
    try {
        if (!req.headers.token) return res.status(500).send('User not logged in')
        
        jwt.verify(req.headers.token, process.env.SECRET, async (err, decoded) => {
            if (err) return res.status(500).send('Token not valid')
            const user = await UserModel.findOne({ _id: decoded.user_id }, {password: 0})

            if (!user) return res.status(500).send('No user found with this id')
            
            // saves user in local storage
            res.locals.user = user
            // calls next middleware
            next()
            
        })
    } catch (err) {
        console.error(err)
        res.status(500).send(`Error authorizing user: ${err}`)
    }
}

async function checkAdmin(req, res, next) {
    try {
        if (res.locals.user.role === 'Admin') {
            next()
        } else {
            res.send('User not authorized')
        }
    } catch (err) {
        console.error(err)
        res.status(500).send(`Error authorizing user: ${err}`)
    }
}

module.exports = { checkAuth, checkAdmin }
