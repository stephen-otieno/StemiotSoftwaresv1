const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true }, // Full blog text
  author: { type: String, default: 'Stemiot Team' },
  category: { type: String, required: true },
  image: { type: String, required: true }, // URL to the image
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);