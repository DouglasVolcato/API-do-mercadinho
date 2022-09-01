const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Running at port ${port}`);
});