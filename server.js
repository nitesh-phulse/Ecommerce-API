// server.js
// Import necessary libraries and modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

// Create an Express application
const app = express();

// Define the port for the server to listen on, using the provided port or defaulting to 3000
const PORT = process.env.PORT || 3000;

// Use bodyParser middleware to parse JSON data in requests
app.use(bodyParser.json());
app.use('/products', productRoutes);

// Connect to the MongoDB database (assuming it's running locally on the default port)
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
