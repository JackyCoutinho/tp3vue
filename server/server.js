const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const corsOption = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOption));

const db = require("./app/models");
//Sequelize
db.connex.sync();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//route
require("./app/routes/produit.route")(app);

const PORT = 8001;
app.listen(PORT, () => {
  console.log(`Le serveur s'exécute sur le port ${PORT}.`);
});
