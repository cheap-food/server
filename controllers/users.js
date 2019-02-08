const User = require('../models/users')
const jwtToken = require('../helpers/jwtToken')
const decoder = require('../helpers/tokenDecoder')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

module.exports = {
  loginGoogle: ((req,res) => {
    let dataPayload = undefined;
    client.verifyIdToken({
      idToken : req.body.token,
      audience : process.env.CLIENT_ID
    })
    .then(ticket => {
      const payload = ticket.getPayload();
      dataPayload = payload;
      return User.findOne({
        email : payload.email
      })
    })
    .then(data => {
      if(!data) {
        return User.create({
          name : dataPayload.name,
          email : dataPayload.email
        })
      } 
      else {
        return {
          name : data.name,
          email : data.email
        };
      }
    })
    .then(newUser => {
      res
        .status(200)
        .json(
          jwtToken({
            name : newUser.name,
            email : newUser.email
        }))
    })
    .catch(err => {
      res
        .status(500)
        .json({
          msg: 'internal server error',
          err: err
      })
    })
  }),
  verifyUser: ((req, res) => {
    try {
      let tokenDecoded = decoder(req.body.token)
      res.json(tokenDecoded)
    } catch (err) {
      res
        .status(500)
        .json()
    }
  })
}