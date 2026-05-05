const Blog = require('../models/Blog');

// @desc    Get all blog posts
// @route   GET /api/blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 }); // Newest first
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Server Error: Could not fetch blogs" });
  }
};

// @desc    Create a new blog post
// @route   POST /api/blogs
const createBlog = async (req, res) => {
  try {
    const { title, excerpt, content, category, image, author } = req.body;
    
    const newBlog = await Blog.create({
      title,
      excerpt,
      content,
      category,
      image,
      author
    });

    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: "Error: Could not create blog post" });
  }
};

module.exports = { getBlogs, createBlog };