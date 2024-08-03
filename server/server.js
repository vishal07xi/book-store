const express = require("express");


const app = express();

const data = [
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": "Fiction",
      "published_year": 1960,
      "isbn": "978-0-06-112008-4",
      "pages": 281
    },
    {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "genre": "Dystopian",
      "published_year": 1949,
      "isbn": "978-0-452-28423-4",
      "pages": 328
    },
    {
      "id": 3,
      "title": "Moby Dick",
      "author": "Herman Melville",
      "genre": "Adventure",
      "published_year": 1851,
      "isbn": "978-1-5011-9671-2",
      "pages": 585
    },
    {
      "id": 4,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": "Classic",
      "published_year": 1925,
      "isbn": "978-0-7432-7356-5",
      "pages": 180
    },
    {
      "id": 5,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "genre": "Fiction",
      "published_year": 1951,
      "isbn": "978-0-316-76948-0",
      "pages": 277
    }
  ]

app.get("/", (req, res) => {
    res.json({ list: data });
})

app.listen(5000, () => {
    console.log("Server is running");
});