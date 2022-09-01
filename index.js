const express = require("express");
const app = express();
const cors = require("cors");
const connectToDatabase = require("./src/database/connect");
const productsRoutes = require("./src/routes/products.routes");

require("dotenv").config();

connectToDatabase();
app.use(cors());
app.use(express.json());

app.use("/products", productsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running at port ${port}`);
});
