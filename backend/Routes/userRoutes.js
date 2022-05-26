const express = require("express");
const { register, login, logout, followUser, getUserDetails, getAllUsers } = require("../Controllers/userController");
const { isAuthenticated } = require("../Middleware/auth");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/users").get(isAuthenticated, getAllUsers);
router.route("/profile").get(isAuthenticated, getUserDetails);
router.route("/follow/:id").get(isAuthenticated, followUser);


module.exports = user = router;