const express = require('express');
const auth = require('../middleware/auth');

/*
 ** import controllers
 */
const CreateAccount = require('../controllers/users/CreateAccount');
const Login = require('../controllers/users/Login');
const Logout = require('../controllers/users/Logout');
const LogoutAllAccounts = require('../controllers/users/LogoutAllAccounts');
const Profile = require('../controllers/users/Profile');
const UpdateAccount = require('../controllers/users/UpdateAccount');
const DeleteAccount = require('../controllers/users/DeleteAccount');

// utils
const errorMessage = require('../../utils/errors/message');

const router = express.Router();
/** 
 * 
 * @swagger
 * /users:
 * 	post:
 * 		description: Sign up
 * 		parameters:
 * 		- name:
 * 		  type: String
 * 		- email: email
 * 		  type: String
 * 		- password:
 * 		  type: String
 * 		responses:
 * 			200:
 * 				description: Success
 */
router.post('/users', CreateAccount);
/** 
 * 
 * @swagger
 * /users:
 * 	post:
 * 		description: Sign up
 * 		responses:
 * 			200:
 * 				description: Success
 */
router.post('/users/login', Login);

router.use(auth);

router.post('/users/logout', Logout);
router.post('/users/logoutAll', LogoutAllAccounts);
router
	.route('/users/me')
	.get(Profile)
	.patch(UpdateAccount)
	.delete(DeleteAccount);

module.exports = router;
