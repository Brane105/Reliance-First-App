const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
  const UserSchema = new mongoose.Schema({
    username:{
        type: String,
    required: true,
    },
    password: {
        type: String,
        required: true,
      }
  },{_id:false});
UserSchema.plugin(AutoIncrement , {id: 'user_id_counter', inc_field: '_id'});
const Usermodel = module.exports = mongoose.model('user', UserSchema,"User")
module.exports = Usermodel;


