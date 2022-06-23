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
app.use(express.json());
app.get("/cats", function (req, res) {
    try {
        var cats = appModel_1.Cat;
        res.send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.send({
            success: false,
            error: error.message,
        });
    }
});
app.get("/cats/:id", function (req, res) {
    try {
        var params_1 = req.params;
        console.log(params_1);
        var cat = appModel_1.Cat.find(function (cat) {
            return cat.id === params_1.id;
        });
        res.send({
            success: true,
            data: {
                cat: cat,
            },
        });
    }
    catch (error) {
        res.send({
            success: false,
            error: error.message,
        });
    }
});
app.post("/cats", function (req, res) {
    try {
        var data = req.body;
        console.log(data);
        appModel_1.Cat.push(data);
        res.status(200).send({
            succes: true,
            data: { data: data },
        });
    }
    catch (error) {
        res.send({
            success: false,
            error: error.message,
        });
    }
});
app.use(function (req, res, next) {
    console.log("error");
    res.send({ error: "404 not found err" });
});
app.listen(port, function () {
    console.log("server is on... http://localhost:" + port + "/");
});
//# sourceMappingURL=app.js.map