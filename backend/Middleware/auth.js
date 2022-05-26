const jwt = require("jsonwebtoken");
const catchAsyncErrors = require("./catchAsyncErrors");
const User = require("../Database/Models/userSchema");

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {

    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Please login to access this resource",
        });
    }
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(data.id);
    next();

});