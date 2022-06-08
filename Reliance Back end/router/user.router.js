let express = require('express');
let router = express.Router();
let UserController = require('../controller/user.controller');
router.get('/users', UserController.getusers);
router.post('/signUp', UserController.storeUserDetails);
router.get('/user/:username/:password', UserController.getUser)
router.get('/user/:username', UserController.getprofile)
router.delete('/user/delete/:username', UserController.deleteUser)
module.exports = router;