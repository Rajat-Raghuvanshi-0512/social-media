const UserDB = require("../Database/Models/userSchema");
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const saveToCookie = require("../utils/saveToCookie");

// Register User
exports.register = catchAsyncErrors(async (req, res, next) => {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
        return next(new ErrorHandler(400, "Please provide all the required fields"));
    }
    if (await UserDB.findOne({ email })) {
        return next(new ErrorHandler(400, "Email already in use"));
    }
    const user = await UserDB.create({ name, password, email })

    saveToCookie(201, user, res);
})

// Login User
exports.login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler(400, "Please Enter both email and password"))
    }
    const user = await UserDB.findOne({ email }).select("+password")
    if (!user) {
        return next(new ErrorHandler(400, "Invalid Email or Password"))
    }
    const matchPass = await user.matchPassword(password)
    if (!matchPass) {
        return next(new ErrorHandler(400, "Invalid Email or Password"))
    }

    saveToCookie(200, user, res);
})

// Logout User

exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "Logged Out Successfully"
    })
});

// Get user deyails
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await UserDB.findById(req.user._id).select("-password");
    res.status(200).json({
        success: true,
        data: user
    })
})

// Follow User

exports.followUser = catchAsyncErrors(async (req, res, next) => {
    const userId = req.params.id;
    if (!userId) {
        return next(new ErrorHandler(400, "Please provide userId"));
    }
    const user = await UserDB.findById(req.user._id);
    const userToFollow = await UserDB.findById(userId);
    if (!user || !userToFollow) {
        return next(new ErrorHandler(400, "Invalid User"));
    }

    if (user.following.includes(userId)) {
        user.following = user.following.filter(id => id.toString() !== userId);
        userToFollow.followers = userToFollow.followers.filter(id => id.toString() !== user._id.toString());
        await user.save();
        await userToFollow.save();
        return res.status(200).json({
            success: true,
            message: "User Unfollowed"
        })
    } else {
        user.following.push(userId);
        userToFollow.followers.push(user._id);
        await user.save();
        await userToFollow.save();
        return res.status(200).json({
            success: true,
            message: "User Followed"
        })
    }
})

exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
    const users = (await UserDB.find()).reverse()
    if (!users) {
        return next(new ErrorHandler(404, "No users found"))
    }
    return res.status(200).json({ success: true, users })
})