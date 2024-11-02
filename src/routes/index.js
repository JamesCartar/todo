const homeController = require("../controllers/home.controller");

const route = require("express").Router();

route.get("/", (req, res) => homeController.getHome(req, res));

module.exports = route;
