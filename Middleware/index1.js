import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded()); // parses the form data and attaches it to req

app.use(express.static("public"));

 app.post("/submit", function (req, res) { //function to log the request and send a response
      console.log(req.body);
      res.send("Got it! Look at the server terminal.");
    });

app.listen(port, function () {
  console.log("Listening on http://localhost:" + port);
});
