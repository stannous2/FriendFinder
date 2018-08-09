// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
const app = express();

// sets an initial port for server to listen on
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


//setup routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Listner
app.listen(PORT, function (err) {
    if (err) throw err;
    console.log(`You're now running a server on port ${PORT}`)
})