const User = require('../model/userSchema');


exports.getHomepage = (req, res) => {
    res.json(200, { message: 'Welcome to the homepage' });
};