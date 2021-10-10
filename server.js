//get all the nodes files I need
//dependecies
const express = require("express");

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/html")(app);
require("./routes/apiRoute")(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
