const chalk = require("chalk");
const express = require("express");
const app = express();
console.log(chalk.blueBright("in apddffdp"));

const PORT = 9191;
app.listen(PORT, () => {
  console.log(chalk.yellowBright(`listening on port ${PORT}`));
});

// app.get("/user", (req, res) => {
//   res.send({ name: "user", age: 55 });
// });

// app.post("/", (req, res) => {
//   res.send([
//     { name: "user", age: 45 },
//     { name: "secondUser", age: 85 },
//   ]);
// });

// app.delete("/1", (req, res) => {
//   res.send("user deleted");
// });

// app.put("/2", (req, res) => {
//   res.send("user updated");
// });

// app.patch("/3", (req, res) => {
//   res.send("user like post");
// });

///// ***** HOME WORK ****/////
///// ***** HOME WORK ****/////

// app.get("/headers", (req, res) => {
//   res.send(req.headers);
// });

// app.get("/:id", (req, res) => {
//   res.send(req.params);
//   console.log(req.params);
// });

// app.use((req, res) => {
//   res.send(req.query);
// });

// app.use(express.json());
// app.use((req, res) => {
//   res.send(req.body);
// });

// app.use((req, res) => {
//   req.guy = { name: "guy", _id: 203226 };
//   res.send(req.guy);
// });
