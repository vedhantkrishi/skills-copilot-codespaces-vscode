// Create web server
// 1. Create a web server
// 2. Create a route for "/"
// 3. Create a route for "/comments"
// 4. Create a route for "/comments/new"
// 5. Create a route for "/comments/:id"
// 6. Create a route for "/comments/:id/edit"
// 7. Create a route for "/comments/:id/delete"

// Import express
const express = require("express");

// Create express instance
const app = express();

// Create a route for "/"
app.get("/", (req, res) => {
  res.send("Welcome to the comments app");
});

// Create a route for "/comments"
app.get("/comments", (req, res) => {
  res.send("Comments route");
});

// Create a route for "/comments/new"
app.get("/comments/new", (req, res) => {
  res.send("New comment route");
});

// Create a route for "/comments/:id"
app.get("/comments/:id", (req, res) => {
  res.send("Comment route");
});

// Create a route for "/comments/:id/edit"
app.get("/comments/:id/edit", (req, res) => {
  res.send("Edit comment route");
});

// Create a route for "/comments/:id/delete"
app.get("/comments/:id/delete", (req, res) => {
  res.send("Delete comment route");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});