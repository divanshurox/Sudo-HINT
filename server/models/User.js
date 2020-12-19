const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    displayName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    githubId: { type: String, required: true },
    avatar_url: { type: String, required: true },
    bio: { type: String, required: true },
    // social :{
    //   followers: {
    //     type:  ,
    //   }
    // }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
