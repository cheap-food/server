const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true,
    validate : [{
      validator : function(v) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v)
      },
      message : "invalid email format"
    },{
      isAsync : true,
      validator : (value, callback) => {
        User
          .findOne({
            email: value
          })
          .then(member => {
            if (member) {
              callback(false)
            } else {
              callback(true)
            }
          })
          .catch(err => {
            console.log(err)
          })
      },
      message: "this email is already used"
    }]
  }
})

const User = mongoose.model('Users', UserSchema);

module.exports = User;