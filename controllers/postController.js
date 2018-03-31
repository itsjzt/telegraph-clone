const mongoose = require("mongoose");
const Blog = require("../model/blog");

exports.savePost = async (req, res) => {
  const { post_text, title, username } = req.body;
  const post = new Blog({ title, username, post_text });
  await post.save();
  res.render("post", {
    firsttime: true,
    title: post.title,
    username: post.username,
    post_text: post.post_text
  });
};

exports.findPost = async (req, res) => {
  const title = req.params.title;
  const post = await Blog.findOne({ title: title });
  res.render("post", {
    title: post.title,
    username: post.username,
    post_text: post.post_text
  });
};
