import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/user", (req, res) => {
  res.send({
    firstName: "Ese",
    lastName: "David",
    email: "ebikemeese@gmail.com",
    createdAt: "17/06/2024",
    updatedAt: "17/06/2024",
  });
});

app.get("/user/1", (req, res) => {
  res.status(200).json({
    id: 1,
    firstName: "Ese",
    lastName: "David",
    email: "ebikemeese@gmail.com",
    createdAt: "17/06/2024",
    updatedAt: "17/06/2024",
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
