const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Blog = require('./models/Blog');
const Project = require('./models/Project'); // Correctly imported
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

const blogs = [
  {
    title: "The Rise of Fintech in Kenya: Beyond M-Pesa",
    excerpt: "Exploring how new payment integrations are shaping the digital marketplace in East Africa.",
    content: "Full content about the evolution of digital payments...",
    category: "Fintech",
    author: "Stemiot Team",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Optimizing MongoDB for High-Traffic Applications",
    excerpt: "Learn how Stemiot Softwares handles database scaling using advanced indexing techniques.",
    content: "Deep dive into schema design and query performance...",
    category: "Databases",
    author: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Modern Web Security: Protecting User Data",
    excerpt: "A guide on implementing JWT and encryption in MERN stack applications.",
    content: "Security is the backbone of any software solution...",
    category: "Security",
    author: "Stemiot Team",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  }
];

const projects = [
  {
    name: "Local Service-Hub",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    description: "A digital marketplace connecting vetted artisans with clients via geolocation.",
    link: "https://google.com"
  },
  {
    name: "Swiftcare Medical App",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    description: "A healthcare management system for patient records and appointment scheduling.",
    link: "https://google.com"
  }
];

const importData = async () => {
  try {
    // Clear existing data from BOTH collections
    await Blog.deleteMany();
    await Project.deleteMany();

    // Insert new data into BOTH collections
    await Blog.insertMany(blogs);
    await Project.insertMany(projects);

    console.log('Stemiot Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Blog.deleteMany();
    await Project.deleteMany();
    console.log('Stemiot Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Logic to check command line arguments
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}