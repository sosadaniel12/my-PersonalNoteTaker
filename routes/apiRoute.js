const fs = require("fs");
const db = require("./db/db.json");
const shortid = require("shortid");
const htmlRoute = require("./html");

const apiRoute = (app) => {
  app.get("/api/notes", (req, res) => {
    return res.json(db);
  });

  app.post("/api/notes", (req, res) => {
    console.log(req.body);
    const newNote = {
      id: shortid.generate(),
      title: req.body.title,
      text: req.body.text,
    };
    console.log(newNote);
    db.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
      if (err) throw err;
      return res.json(db);
    });
  });
};

module.exports = htmlRoute;
