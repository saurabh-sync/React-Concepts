// const express = require("express")
import express from "express";
const app = express();
// app.use(express.static("dist"));

// app.get("/", (req, res) => {
//   res.send("Server Is  Ready");
// });

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "A very funny joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "A very funny second joke",
    },
    {
      id: 3,
      title: "Another third joke",
      content: "A very funny third joke",
    },
    {
      id: 4,
      title: "Another fourth joke",
      content: "A very funny fourth joke",
    },
    {
      id: 5,
      title: "Another fifth joke",
      content: "A very funny fifth joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
