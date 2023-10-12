const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWE_SECRET = "YourSecretKeyHere"


// Create user using Post "api/auth". Doesn't require Auth
router.post('/createuser',[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
] , async (req, res)=>{
  //If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
    //check user with this email exists already
    let user = await User.findOne({email: req.body.email});
    if(user){
      return res.status(400).json({error: "Sorry a user with this email already exists"})
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt)

    //Create New user
    user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,

      })
      const data={
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWE_SECRET)
      console.log(authtoken)
      
      
    res.json({authtoken})
    }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occured");
  }
    // res.send(req.body)
})

module.exports = router