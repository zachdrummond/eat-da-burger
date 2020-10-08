const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;

// MIDDLEWARE
app.use(express.urlencoded( { extended: true } ) );
app.use(express.json());
TODO: // Add the Path to the public file
// app.use(express.static(path.join(__dirname, (path))));
app.engine("handlebars", exphbs( { defaultLayout: "main" } ) );
app.set("view engine", "handlebars");

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

app.get("/", (req, res) => {
    res.render("index");
});