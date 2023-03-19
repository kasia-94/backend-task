const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello POSTGRES + NODEJS!!!");
});

app.listen(PORT, () => console.log(`Server started on post ${PORT}`));
