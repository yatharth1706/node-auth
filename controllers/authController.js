const User = require('../models/UserModel')

const signup_get = (req,res) => {
    res.render('signup');
}

const login_get = (req,res) => {
    res.render('login');
}

const signup_post = async (req,res) => {
    const {email, password} = req.body;

    try {
        
        const user = await User.create({email, password})
        res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).send('Error, user not created')
    }
    
}

const login_post = (req,res) => {
    res.send('new login');
}

module.exports = {
    signup_get,
    login_get,
    signup_post,
    login_post
}