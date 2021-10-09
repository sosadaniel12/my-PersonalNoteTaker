//get all the nodes files I need
const express = require("express");
const route = express.Router();
const fs = require("fs");
const path = require("path");
const notes = require("./db/db.json");

//create the middleware to have a response
//Create a post method to send the info to the database
//Be able to store the input a user saves into the database
//Be able to append the notes they already have with the newest ones they have added
//When a note is saved it will display at the right side of the page of the notes.html
//When a user clicks on a created note it will display on the right side of the page

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.post("/api/notes", (req, res) => {});
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
