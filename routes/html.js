const app = require("path");

const htmlRoute = function () {
  app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "/public/index.html"))
  );

  app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });
};

module.exports = htmlRoute;
