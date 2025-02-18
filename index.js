import express from "express";

const app = express();

app.get("/", (req, res) => {
  const { query: { name } = {} } = req;
  if (name) {
    return res.send(`hello ${name}`);
  }
  res.send("hello world");
});

export { app };
