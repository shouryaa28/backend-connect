const router = require('express').Router();
const {getHomepage, loginUser, registerUser} = require('../controllers/userController')

router.route('/').get(getHomepage)
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)


module.exports = router