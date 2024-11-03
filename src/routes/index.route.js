const homeController = require("../controllers/home.controller.js");

const userRoute = require("./user.route.js");

const route = require("express").Router();

route.get("/", homeController.getHome);

route.use("/users", userRoute);

module.exports = route;
