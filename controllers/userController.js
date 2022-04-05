const User = require('../model/userSchema');
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

exports.getHomepage = (req, res) => {
    res.status(200).json({ message: 'Welcome to the homepage' });
};

exports.registerUser = catchAsyncErrors(async (req, res) => {
    const {username,email,password} = req.body;
    const user =await User.create({
        username,email,password
    })
    
})

exports.loginUser = catchAsyncErrors(async (req, res) => {
    const {email,password} = req.body;
    if(!email || !password){
        return next(new ErrorHandler("Please provide email and password", 422));
    }
    const user =await User.findOne({ email }).select("+password");
    if(!user) {
        return next(new ErrorHandler("User not found", 400));
    }
    const isPasswordMatch =await user.comparePassword(password);
    
    if (!isPasswordMatch){
        return next(new ErrorHandler("Invalid email or password", 422));
    }
});