const express = require("express");
var exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;
const db = require("./models/index");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

const router = require('./controllers/burger_controller');
app.use('/', router);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});