// Load variables from the .env file
require("dotenv").config();

// Import MongoDB tools from the mongodb package
const { MongoClient, ServerApiVersion } = require("mongodb");

// Get the MongoDB connection string from the .env file
const uri = process.env.MONGODB_URI;

// Check if MONGODB_URI exists
if (!uri) {
  throw new Error("MONGODB_URI was not found in the .env file.");
}

// Create a MongoDB client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Create an asynchronous function
async function main() {
  try {
    // Connect to MongoDB
    await client.connect();

    // Send a simple command to MongoDB
    // to make sure the connection works
    await client.db("admin").command({ ping: 1 });

    console.log("Connected successfully to MongoDB!");
  } catch (error) {
    // If something goes wrong, show the error
    console.error("MongoDB connection error:");
    console.error(error);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}

// Run the function
main();