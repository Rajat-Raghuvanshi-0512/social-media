const PostDB = require("../Database/Models/postSchema");
const UserDB = require("../Database/Models/userSchema");
const catchAsyncErrors = require("../Middleware/catchAsyncErrors")

exports.createPost = catchAsyncErrors(async (req, res) => {
    const owner = req.user._id;
    const post = await PostDB.create({ caption: req.body.caption, owner });
    const user = await UserDB.findById(owner);
    user.posts.push(post._id);
    await user.save();

    res.status(201).json({
        success: true,
        data: post,
    });

})

exports.likeAndUnlikePost = catchAsyncErrors(async (req, res) => {
    const postId = req.params.id;
    const post = await PostDB.findById(postId);
    if (!post) {
        return res.status(404).json({
            success: false,
            message: "Post not found",
        });
    }
    if (await post.likes.includes(req.user._id.toString())) {
        post.likes = post.likes.filter(like => like.toString() !== req.user._id.toString());
        await post.save();

        return res.status(200).json({
            success: true,
            message: "Post Unliked",
        });
    } else {
        post.likes.push(req.user._id.toString());
        await post.save();

        return res.status(200).json({
            success: true,
            message: "Post Liked",
        });
    }
})

exports.deletePost = catchAsyncErrors(async (req, res) => {
    const postId = req.params.id;
    const post = await PostDB.findById(postId);
    if (!post) {
        return res.status(404).json({
            success: false,
            message: "Post not found",
        });
    }
    if (post.owner.toString() !== req.user._id.toString()) {
        return res.status(401).json({
            success: false,
            message: "You are not authorized to delete this post",
        });
    }
    const user = await UserDB.findById(post.owner);
    user.posts = user.posts.filter(post => post.toString() !== postId);
    await user.save();
    await post.remove();

    res.status(200).json({
        success: true,
        message: "Post Deleted",
    });
})

exports.updatePost = catchAsyncErrors(async (req, res) => {
    const postId = req.params.id;
    const post = await PostDB.findById(postId);
    if (!post) {
        return res.status(404).json({
            success: false,
            message: "Post not found",
        });
    }
    if (post.owner.toString() !== req.user._id.toString()) {
        return res.status(401).json({
            success: false,
            message: "You are not authorized to update this post",
        });
    }
    const updatedPost = await PostDB.findByIdAndUpdate(postId, { caption: req.body.caption }, { new: true });
    return res.status(200).json({
        success: true,
        data: updatedPost,
    });
})

exports.addComment = catchAsyncErrors(async (req, res) => {
    const postId = req.params.id;
    const post = await PostDB.findById(postId);
    if (!post) {
        return res.status(404).json({
            success: false,
            message: "Post not found",
        });
    }
    if (!req.body.comment) {
        return res.status(400).json({
            success: false,
            message: "Comment is required",
        });
    }
    const comment = await PostDB.findByIdAndUpdate(postId, {
        $push: {
            comments: {
                user: req.user._id,
                comment: req.body.comment
            }
        }
    }, { new: true });

    return res.status(200).json({
        success: true,
        data: comment,
    });
})

exports.deleteComment = catchAsyncErrors(async (req, res) => {
    const postId = req.params.id;
    const post = await PostDB.findById(postId);
    if (!post) {
        return res.status(404).json({
            success: false,
            message: "Post not found",
        });
    }
    if (!req.body.commentId) {
        return res.status(400).json({
            success: false,
            message: "Comment Id is required",
        });
    }
    if (post.comments.find((comment => comment._id.toString() === req.body.commentId)) === undefined) {
        return res.status(400).json({
            success: false,
            message: "Comment Id is invalid",
        });
    }
    const isUser = post.comments.find(comment => comment.user.toString() === req.user._id.toString() && comment._id.toString() === req.body.commentId.toString());

    const owner = post.owner.toString() === req.user._id.toString();
    if (!isUser && !owner) {
        return res.status(401).json({
            success: false,
            message: "You are not authorized to delete this comment",
        });
    }
    const comment = await PostDB.findByIdAndUpdate(postId, {
        $pull: {
            comments: {
                _id: req.body.commentId
            }
        }
    }, { new: true });

    res.status(200).json({
        success: true,
        data: comment,
    });

})

// Get Posts of Following Users

exports.getPostsOfFollowing = catchAsyncErrors(async (req, res, next) => {
    const user = await UserDB.findById(req.user._id);
    const following = user.following;
    const posts = await PostDB.find({ owner: { $in: following } }).populate("owner likes comments.user", "name email avatar")
    res.status(200).json({
        success: true,
        data: posts.reverse(),
    });
})