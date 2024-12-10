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

// mongodb
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const bookCollections = client.db("BookStore_db").collection("books")
    app.post("/upload_book", async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    })

    // get all books data
    app.get("/all_books", async (req, res) => {
      const books = bookCollections.find();
      const result = await books.toArray();
      res.send(result);
    })

    // update a book data
    app.patch("/books/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;

      try {
        const result = await bookCollections.updateOne(
          { _id: new ObjectId(id) }, // Filter: Find the document with the specified id
          { $set: {...updateBookData} }, 
          { upsert: true }
        );

        res.send(result);
      } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).send("An error occurred while updating the book.");
      }
    });
    // deletebook
    app.delete("/books/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const result = await bookCollections.deleteOne({ _id: new ObjectId(id) });
        res.send(result);
      } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).send("An error occurred while deleting the book.");
      }
    });
    // get book by category
    app.get("/all_books/:category", async (req, res) => {
      const category = req.params.category;
      try {
        const result = await bookCollections.find({ category: category }).toArray();
        res.send(result);
      } catch (error) {
        console.error("Error getting book:", error);
        res.status(500).send("An error occurred while getting the book.");
      }
    });
    // get book by author
    app.get("/books/:author", async (req, res) => {
      const author = req.params.author;
      try {
        const result = await bookCollections.find({ authorName: author }).toArray();
        res.send(result);
      } catch (error) {
        console.error("Error getting book:", error);
        res.status(500).send("An error occurred while getting the book.");
      }
    });

    //single book get
    app.get("/book/:id", async(req, res)=> {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollections.findOne(filter);
      res.send(result);
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})