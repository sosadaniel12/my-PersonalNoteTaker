const fs = require("fs");
const db = require("../db/db.json");
const shortid = require("shortid");

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

  //Deletes notes api
  app.delete("/api/notes/:id", (req, res) => {
    let id = req.params.id;
    db.splice(id - 1, 1);
    db.forEach((obj, i) => {
      obj.id = i + 1;
    });
    fs.writeFile("../db/db.json", JSON.stringify(db), () => res.json(db));
  });
};

module.exports = apiRoute;
