const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware
app.use(cors({
  origin: ["https://book-store-inventory-site.vercel.app", "http://localhost:5173"],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello prashant!');
});

// MongoDB connection with auto-reconnect
const connectWithRetry = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('MongoDB connected');
  }).catch(err => {
    console.error('MongoDB connection error. Retrying in 5s...', err);
    setTimeout(connectWithRetry, 5000);
  });
};

connectWithRetry();

const bookSchema = new mongoose.Schema({}, { strict: false }); // Use strict schema for validation if needed
const Book = mongoose.model('Book', bookSchema, 'books');

// Routes
app.post("/upload_book", async (req, res) => {
  try {
    const data = new Book(req.body);
    const result = await data.save();
    res.send(result);
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).send("Upload failed");
  }
});

app.get("/all_books", async (req, res) => {
  const result = await Book.find();
  res.send(result);
});

app.patch("/books/:id", async (req, res) => {
  try {
    const result = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, upsert: true });
    res.send(result);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).send("Update failed");
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).send("Delete failed");
  }
});

app.get("/all_books/:category", async (req, res) => {
  try {
    const result = await Book.find({ category: req.params.category });
    res.send(result);
  } catch (err) {
    console.error("Get by category error:", err);
    res.status(500).send("Failed to get by category");
  }
});

app.get("/books/:author", async (req, res) => {
  try {
    const result = await Book.find({ authorName: req.params.author });
    res.send(result);
  } catch (err) {
    console.error("Get by author error:", err);
    res.status(500).send("Failed to get by author");
  }
});

app.get("/book/:id", async (req, res) => {
  try {
    const result = await Book.findById(req.params.id);
    res.send(result);
  } catch (err) {
    console.error("Get single book error:", err);
    res.status(500).send("Failed to get book");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
