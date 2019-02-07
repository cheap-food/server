const User = require('../models/users')
// const jwtToken = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const axios = require('axios')

require('dotenv').config()
module.exports = {
  
  loginGoogle: (req,res) => {
    let dataPayload = undefined;
    client.verifyIdToken({
      idToken : req.body.token,
      audience : process.env.CLIENT_ID
    })
    .then( ticket => {
      const payload = ticket.getPayload();
      dataPayload = payload;
      return User.findOne({
        email : payload.email
      })
    })
    .then( data => {
      if(!data) {
        return User.create({
          name : dataPayload.name,
          email : dataPayload.email
        })
      } 
      else {
        res.status(200).json(jwtToken({
          name : data.name,
          email : data.email
        }))
      }
    })
    .then( newUser => {
      res.status(200).json(jwtToken({
        name : newUser.name,
        email : newUser.email
      }))
    })
    .catch( err => {
      res.status(500).json({
        msg: 'internal server error',
        err: err
      })
    })
  },

  search: function(req, res) {
    // console.log(process.env.FOOD2FORK_KEY)
    // console.log(req.body.search)
    // console.log(req.body)
    // search nama menu recipe
    req.params.id = req.params.page || 1
    
    axios.get(`https://www.food2fork.com/api/search?key=${process.env.FOOD2FORK_KEY}&q=${req.body.search}`)
      .then( function(response) {
        res
          .status(200)
          .json(response.data)
      })
      .catch( function(err) {
        res
          .status(500)
          .json({ msg : `internal server error`, err : err.message })
      })
  }
}