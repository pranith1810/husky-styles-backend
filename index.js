import express from "express";

const app = express();
app.get("/husky-airlines", (req, res) => {
  res.send("Welcome to Husky Airlines!");
});

app.listen(4000, () => {
  console.log("Server started in port 4000");
});
