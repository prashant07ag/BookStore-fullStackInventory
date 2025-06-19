const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const { ObjectId } = require('mongodb');
require('dotenv').config();

//middleware
app.use(cors(
  {
    origin: ["https://book-store-inventory-site.vercel.app", "http://localhost:5173"],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true
  }
));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello prashant!')
})

// MongoDB connection with better configuration
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  // Connection pool settings
  maxPoolSize: 10,
  minPoolSize: 5,
  maxIdleTimeMS: 30000,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  // Reconnection settings
  connectTimeoutMS: 10000,
  heartbeatFrequencyMS: 10000,
  // Retry settings
  retryWrites: true,
  retryReads: true
});

let db;
let bookCollections;

// Connection function with retry logic
async function connectToMongoDB() {
  try {
    await client.connect();
    db = client.db("BookStore_db");
    bookCollections = db.collection("books");
    
    // Test the connection
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Successfully connected to MongoDB!");
    
    return true;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    return false;
  }
}

// Connection monitoring and retry logic
async function ensureConnection() {
  try {
    // Check if connection is alive
    await client.db("admin").command({ ping: 1 });
    return true;
  } catch (error) {
    console.log("🔄 Connection lost, attempting to reconnect...");
    return await connectToMongoDB();
  }
}

// Middleware to ensure connection before each request
async function checkConnection(req, res, next) {
  const isConnected = await ensureConnection();
  if (!isConnected) {
    return res.status(503).json({ error: "Database connection unavailable" });
  }
  next();
}

// Apply connection check middleware to all database routes
app.use('/upload_book', checkConnection);
app.use('/all_books', checkConnection);
app.use('/books', checkConnection);
app.use('/book', checkConnection);

// Your existing routes (with improved error handling)
app.post("/upload_book", async (req, res) => {
  try {
    const data = req.body;
    const result = await bookCollections.insertOne(data);
    res.json(result);
  } catch (error) {
    console.error("Error uploading book:", error);
    res.status(500).json({ error: "Failed to upload book" });
  }
});

app.get("/all_books", async (req, res) => {
  try {
    const books = bookCollections.find();
    const result = await books.toArray();
    res.json(result);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

app.patch("/books/:id", async (req, res) => {
  const id = req.params.id;
  const updateBookData = req.body;

  try {
    const result = await bookCollections.updateOne(
      { _id: new ObjectId(id) },
      { $set: {...updateBookData} },
      { upsert: true }
    );
    res.json(result);
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ error: "Failed to update book" });
  }
});

app.delete("/books/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await bookCollections.deleteOne({ _id: new ObjectId(id) });
    res.json(result);
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ error: "Failed to delete book" });
  }
});

app.get("/all_books/:category", async (req, res) => {
  const category = req.params.category;
  try {
    const result = await bookCollections.find({ category: category }).toArray();
    res.json(result);
  } catch (error) {
    console.error("Error getting books by category:", error);
    res.status(500).json({ error: "Failed to get books by category" });
  }
});

app.get("/books/:author", async (req, res) => {
  const author = req.params.author;
  try {
    const result = await bookCollections.find({ authorName: author }).toArray();
    res.json(result);
  } catch (error) {
    console.error("Error getting books by author:", error);
    res.status(500).json({ error: "Failed to get books by author" });
  }
});

app.get("/book/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const filter = { _id: new ObjectId(id) };
    const result = await bookCollections.findOne(filter);
    if (!result) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(result);
  } catch (error) {
    console.error("Error getting single book:", error);
    res.status(500).json({ error: "Failed to get book" });
  }
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🔄 Shutting down gracefully...');
  try {
    await client.close();
    console.log('✅ MongoDB connection closed');
  } catch (error) {
    console.error('❌ Error closing MongoDB connection:', error);
  }
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🔄 Received SIGTERM, shutting down gracefully...');
  try {
    await client.close();
    console.log('✅ MongoDB connection closed');
  } catch (error) {
    console.error('❌ Error closing MongoDB connection:', error);
  }
  process.exit(0);
});

// Initialize connection and start server
async function startServer() {
  const connected = await connectToMongoDB();
  if (!connected) {
    console.error("❌ Failed to connect to MongoDB. Exiting...");
    process.exit(1);
  }
  
  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`)
  });
}

// Start the server
startServer();