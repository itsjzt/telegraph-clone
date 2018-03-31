const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "title is required"]
  },
  username: {
    type: String,
    trim: true,
    required: true
  },
  post: {
    type: String,
    trim: true,
    required: [true, "post is required"]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
