const userController = require("../controllers/user.controller");
const {
	createUserValidation,
} = require("../middlewares/validations/user/create-user.validation");

const route = require("express").Router();

route
	.route("/")
	.get((req, res) => userController.getAllUser(req, res))
	.post(createUserValidation, (req, res, next) =>
		userController.createUser(req, res, next)
	);

module.exports = route;
