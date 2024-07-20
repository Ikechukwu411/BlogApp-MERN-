const express = require("express");
const cors = require("cors");
const app = express();
const blog = require("./routes");

app.use(cors());
app.use("/", blog);

const port = 5500;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
