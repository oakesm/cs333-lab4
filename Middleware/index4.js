import express from "express";
import morgan from "morgan"; // imports morgan

const app = express();
const port = 3000;
app.use(morgan("dev")); // logs requests to the console
    app.use(express.urlencoded()); // parse form data
    app.use(express.static("public")); // serve static files from public folder

function escapeHtml(text) { // function to escape HTML characters
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function bandNameGenerator(req, res, next) {
  const street = req.body.street;
  const pet = req.body.pet;
  if (!street || !pet) {
    res.status(400).send("Both names are needed. <a href='/'>Try again</a>");
    return;
  }
  res.locals.bandName = street + " " + pet;
  next();
}

app.post("/submit", function (req, res) { //function to submit the form data
      const bandName = req.body.street + " " + req.body.pet; // combines the street name and pet names to create a band name
      console.log("Band name:", bandName); //logs in console
      res.send("<h1>Your band name is:</h1><h2>" + bandName + "</h2>"); // send the band name to the user
    });

app.listen(port, function () {
  console.log("Listening on http://localhost:" + port);
});
