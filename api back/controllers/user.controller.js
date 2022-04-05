const UserModel = require('../models/users.model')
const bcrypt = require('bcrypt')


const createUser = async (req, res) => {
    try {
        const hashed_pwd = bcrypt.hashSync(req.body.password, parseInt(process.env.SALT))
        const user = await UserModel.create({
            name: req.body.name,
            email: req.body.email,
            password: hashed_pwd,
            role: req.body.role
        })

        res.json({
            name: user.name,
            email: user.email
        })

    } catch (error) {
        res.status(500).send(error)
    }
}


const getAllUsers = async (req, res) => {
    try {
        const user = await UserModel.find(req.params)
        res.json(user)

    } catch (error) {
        res.status(500).send(error)
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await UserModel
            .findByIdAndUpdate(req.params.userId, req.body, {
                new: true,
                runValidators: true
            })
        res.json(user)

    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteUserById = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndRemove(req.params.userId)
        res.json({
            name : user.name,
            email : user.email,
            deleted : true
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userId)
        res.json(user)

    } catch (error) {
        res.status(500).send(error)
    }
}

const getStudents = async (req, res) => {
    try {
        const student = await UserModel
            .find({
                "role": "Student"
            }, {password: 0})
        res.json({
            student
        })
    } catch (error) {

    }

}


module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUserById,
    getStudents,
    getUserById
}
