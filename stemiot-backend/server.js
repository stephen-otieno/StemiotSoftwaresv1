const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware SETUP (Must be completely declared BEFORE any route maps)
app.use(cors({
  origin: ["http://localhost:3000", "https://stemiot-frontend.vercel.app"], 
  credentials: true
}));
app.use(express.json());

// API Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/auth', require('./routes/authRoutes')); // Linked smoothly now

// Basic Test Route
app.get('/', (req, res) => {
  res.send('Stemiot Softwares API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});