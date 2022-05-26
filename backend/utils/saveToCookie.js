module.exports = (statusCode, user, res) => {

    // Generate JWT
    const token = user.getJwtToken()

    // Set cookie
    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    });

    res.status(statusCode).json({
        success: true,
        user,
    });
}