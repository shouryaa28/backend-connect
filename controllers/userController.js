const User = require('../model/userSchema');


exports.getHomepage = (req, res) => {
    res.status(200).json({ message: 'Welcome to the homepage' });
};

exports.registerUser =async (req, res) => {
    const {username,email,password} = req.body;
    const user =await User.create({
        username,email,password
    })
    res.status(201).json({ message: 'User created successfully', user });
};

exports.loginUser = async (req, res) => {
    const {email,password} = req.body;
    if(!email || !password){
        res.status(404).json({message: 'Please provide email or password'})
    }
    const user =await User.findOne({ email }).select("+password");
    if(!user) {
        res.status(404).json({error: "User not found"});
    }
    const isPasswordMatch =await user.comparePassword(password);
    
    if (!isPasswordMatch){
          return res.status(422).json({ error: 'Incorrect email or password' });
    }
    res.status(201).json({ message: 'User login successful', user });
};