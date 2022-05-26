const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [8, "Password must be at least 8 characters"],
        select: false
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: [true, "Email already in use"]
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
            default: "sample-avatar"
        },
        url: {
            type: String,
            required: true,
            default: "https://res.cloudinary.com/rajat0512/image/upload/v1645869998/samples/avatar_hohikk.jpg"
        }
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }

});

userSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) return next();
        const hashedPassword = await bcrypt.hash(this.password, 12);
        this.password = hashedPassword;
    } catch (err) {
        console.log(err)
    }
})

userSchema.methods.matchPassword = async function (pass) {
    try {
        return await bcrypt.compare(pass, this.password);
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
}

userSchema.methods.getJwtToken = function () {
    try {
        return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE
        })
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
}

module.exports = mongoose.model("User", userSchema);