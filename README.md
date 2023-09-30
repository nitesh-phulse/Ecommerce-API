# Ecommerce-API

This is a simple API for managing product inventory in an e-commerce platform. The API allows administrators to add products to the database.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [Create a Product](#create-a-product)
- [Testing the API](#testing-the-api)
- [Contributing](#contributing)


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed: [Download Node.js](https://nodejs.org/)
- MongoDB installed and running: [Download MongoDB](https://www.mongodb.com/)

## Getting Started

To get started with this API, follow these steps:

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/ecommerce-inventory-api.git
   cd ecommerce-inventory-api

   npm install

## Configuration
1 Create a .env file in the project root:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ecommerce
Modify the MONGODB_URI to match your MongoDB server configuration.

### API Endpoints

# Create a Product
URL: POST /products/create
Description: Add a new product to the inventory.
Request Body:
JSON
{
  "name": "Product Name",
  "quantity": 10
}



>Response:
  201 Created: Product created successfully.
  500 Internal Server Error: If there was an issue creating the product.


## Testing the API
Use a tool like Postman to test the API by sending POST requests to http://localhost:3000/products/create with the appropriate JSON payload containing the product information.

## Example JSON payload:
{
  "name": "Sample Product",
  "quantity": 10
}
You should receive a response indicating that the product was created successfully.






