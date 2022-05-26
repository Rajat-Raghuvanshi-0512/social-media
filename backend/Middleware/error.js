const ErrorHandler = require("../utils/ErrorHandler")

module.exports = (err, req, res, next) => {
    err.message = err.message || "Internal server error"
    err.statusCode = err.statusCode || 500

    if (err.name == "ValidationError") {
        err = new ErrorHandler(400, err.message);
    }
    if (err.name == "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`
        err = new ErrorHandler(404, message);
    }

    return res.status(err.statusCode).json({ success: false, error: err.message })
}