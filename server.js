var express = require("express")
var exprshbrs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");
var app = express();
var db = require("./models");
var PORT = 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));
