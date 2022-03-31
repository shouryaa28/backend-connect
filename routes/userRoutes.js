const router = require('express').Router();
const {getHomepage} = require('../controllers/userController')
router.route('/').get(getHomepage)


module.exports = router