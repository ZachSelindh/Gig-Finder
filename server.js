const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const db = require("./config/connection");

// Test Sequelize DB connection.
db.authenticate()
  .then(function() {
    console.log("Conncted to database");
  })
  .catch(function(err) {
    console.log(err);
  });

const PORT = process.env.PORT || 3000;

// Gig routes
const gigRoutes = require("./routes/gigsRoutes");
app.use("/", gigRoutes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set static files
app.use(express.static("public"));

app.listen(PORT, console.log("Server started on port " + PORT));
