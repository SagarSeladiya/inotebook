const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');


// Create user using Post "api/auth". Doesn't require Auth
router.post('/createuser',[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
] , async (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check user with this email exists already
    let user = await User.findOne({email: req.body.email});
    if(user){
      return res.status(400).json({error: "Sorry a user with this email already exists"})
    }
    user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,

      })
      
      .then(user => res.json(user))
      .catch(err=> {console.log(err)
    res.json({error: 'Please enter a unique value for email'})})
    // res.send(req.body)
})

module.exports = router