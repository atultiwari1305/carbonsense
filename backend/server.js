const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const chatbotRoutes = require('./routes/chatbot');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*', // Update this with your Render frontend URL
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/chatbot', chatbotRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running', 
    timestamp: new Date(),
    environment: process.env.NODE_ENV || 'development',
    database: 'MongoDB Atlas'
  });
});

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'CarbonSense India API',
    status: 'Active',
    endpoints: {
      health: '/api/health',
      states: '/api/chatbot/states',
      stateData: '/api/chatbot/state/:stateName'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Database: MongoDB Atlas`);
});
