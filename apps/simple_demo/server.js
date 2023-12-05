const path = require("path");
const express = require("express");

const appPort = 80

const simpleApp = express();

simpleApp.use(express.static(__dirname + "/../../dist"));
simpleApp.use("dev", express.static(__dirname + "/../../dist/dev"));

simpleApp.set("views", path.join(__dirname, "views"));
simpleApp.set("view engine", "ejs");

simpleApp.get("/", (req, res) => {
    res.render("index");
});

simpleApp.listen(appPort, () => {
    console.log(`Simple app is started on port ${appPort}`);
    console.log(`You can access the simple app here: http://localhost:${appPort}`);
});


