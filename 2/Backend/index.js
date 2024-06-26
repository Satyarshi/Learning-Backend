import express from "express";
import "dotenv/config";
const app = express();

const port = process.env.PORT || 3000;

const data = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/api/book", (req, res) => {
  res.json(data);
});

app.get("/api/hello", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
