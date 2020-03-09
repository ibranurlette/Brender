require("dotenv").config();
const express = require('express')
const cors = require("cors");
const app = express()
const routes = require("./routes");
const port = 5000;
app.use(cors());
app.use(express.json())
app.use("/api/v1", routes);
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: "You are not authorized." });
  } else {
    next(err);
  }
});

app.listen(port, () => console.log(`listening in ${port} !`))