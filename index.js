const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./Routes/user");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:4200",
  })
);

app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});


app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/user", userRoutes);


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
