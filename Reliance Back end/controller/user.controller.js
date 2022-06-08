let User = require("../Model/user.model")
const bcrypt = require("bcrypt");
//adding users
let storeUserDetails = async (req, res) => {
    const body = req.body;
    if (!(body.username && body.password)) {
      return res.status(400).send({ error: "Data not formatted properly" });
    }
    // creating a new mongoose doc from user data
    const user = new User(body);
    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    user.password = await bcrypt.hash(user.password, salt);
    user.save().then((doc) => res.status(201).send(doc));
  };
let getUser = async (req, res) => {
    const username = req.params.username;
    const pass = req.params.password
    const user = await User.findOne({ username: username });
    // console.log(user)
    if (user) {
      // check user password with hashed password stored in the database
      const validPassword = await bcrypt.compare(pass, user.password);
      if (validPassword) {
        res.status(200).json({ message: "Successfully Login" });
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
  };
let getprofile = (req, res) => { 
  let username = req.params.username;
  //get profile using username 
  User.find({ username:username}, (err, result) => {
    if (!err) {
      res.json(result);
    }
  });
};
//get all the users
let getusers = (req, res) => { 
  User.find({}, (err, result) => {
    if (!err) {
      res.json(result);
    }
  });
};
let deleteUser = (req, res) => {
  let username = req.params.username; 
  //passing the username through path param
  User.deleteOne({ username: username },(err, result) => {
    if (!err) {
      if (result.deletedCount > 0) {
        res.send('Profile deleted');
      } else {
        res.send('no user');
      }
    }
  });
};

module.exports = {
    storeUserDetails,getUser,getprofile,getusers,deleteUser}