const express = require("express");
const { createPost, likeAndUnlikePost, deletePost, updatePost, addComment, deleteComment, getPostsOfFollowing } = require("../Controllers/postController");
const { isAuthenticated } = require("../Middleware/auth");
const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);
router.route("/post/:id").get(isAuthenticated, likeAndUnlikePost).put(isAuthenticated, updatePost).delete(isAuthenticated, deletePost);
router.route("/post/comment/:id").post(isAuthenticated, addComment).delete(isAuthenticated, deleteComment);
router.route("/posts/following").get(isAuthenticated, getPostsOfFollowing);

module.exports = router;