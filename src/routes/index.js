const route = require("express").Router();

route.get("/", (req, res, next) => {
	res.status(200).json({
		success: true,
		statusCode: 200,
		message: "Welcome from todo application api"
	});
});

module.exports = route;
