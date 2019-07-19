const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../../config/keys').secret;
const passport = require('passport');
let User = require('../../models/User.js');


/**
 * @route POST api/user/register
 * @description Register the user
 * @access public
 * */
router.post('/register', (req, res) => {
    let {name, username, email, password, confirm_password} = req.body;

    //check if passwords match
    if (password !== confirm_password)
        return res.status(400).json({msg: "password do not match"});

    //check for the unique username
    User.findOne({username}).then(user => {
        if (user) return res.status(400).json({msg: "username is already taken"})
    });

    //check for the unique username
    User.findOne({email}).then(user => {
        if (user) return res.status(400).json({msg: "email is already registered"})
    });

    //the data is valid so you can register the user
    let newUser = new User({name, username, email, password});

    //hash password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(() => {
                return res.status(201)
                    .json({success: true, msg: "User is now registered"})
            });
        });
    });
});

/**
 * @route POST api/user/login
 * @description Signing in the user
 * @access public
 * */
router.post('/login', (req, res) => {
    User.findOne({username: req.body.username}).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: "username not found",
                success: true
            })
        }

        //if there is a user we are now going to compare the password
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                //use password is correct and we send
                // the JSON token for that user
                const payload = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    username: user.username
                };

                jwt.sign(payload, key, {expiresIn: 604800}, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        msg: "You are now logged in",
                        user: user
                    })
                });

            } else {
                return res.status(404).json({
                    msg: "incorrect password",
                    success: false
                });
            }
        });
    });
});

/**
 * @route POST api/user/profile
 * @description return the user's data
 * @access Private
 * */
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({user: req.user});
});

module.exports = router;