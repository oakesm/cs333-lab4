import express from "express";
import morgan from "morgan"; // imports morgan

const app = express();
const port = 3000;
app.use(morgan("dev")); // function call to morgan

app.get("/", function (req, res) {
  res.send("Hello");
});

app.listen(port, function () {
  console.log("Listening on http://localhost:" + port);
});
