const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const Register = require("./models/Register");
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productsRoutes = require("./routes/productsRoutes");
// !  rest object

const app = express();
// todo  configure a dotenv
dotenv.config();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//  todo connection to the dataBase

mongoose
  .connect("mongodb://127.0.0.1/ecodes")
  .then(() => {
    console.log("server is runniging".bgBlue.white);
  })
  .catch((e) => {
    console.log(`${e}`.bgRed.white);
  });

// todo  creating  a first route
app.get("/", (req, res) => [res.send("<h1>listening theport</h1>")]);

// todos    creating all routes
app.use("/api", authRoutes);
// ! category routes
app.use("/api", categoryRoutes);
// todo  products route
app.use("/api", productsRoutes);
const PORT = 8080;

//  todo listen the port

app.listen(PORT, () => {
  console.log(`listning the port${PORT}`.bgMagenta.white);
});
