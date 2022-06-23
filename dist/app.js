"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var appModel_1 = require("./appModel");
var app = express();
var port = 8000;
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is middle");
    next();
});
app.get("/", function (req, res) {
    console.log(req);
    res.send({ cats: appModel_1.Cat });
});
app.get("/cats/blue", function (req, res, next) {
    res.send({ blue: appModel_1.Cat[0] });
});
app.get("/cats/som", function (req, res) {
    res.send({ som: appModel_1.Cat[1] });
});
app.use(function (req, res, next) {
    console.log("error");
    res.send({ error: "404 not found err" });
});
app.listen(port, function () {
    console.log("server is on... http://localhost:" + port + "/");
});
//# sourceMappingURL=app.js.map