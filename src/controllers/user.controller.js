const UserService = require("../services/user.service");
const controllerAsyncWrapper = require("../utilities/controllerAsyncWrapper.util");
const {
	BadRequestError,
} = require("../utilities/errors/badRequestError.util.error");

class UserController {
	constructor() {
		this.userService = new UserService();
		this.createUser = controllerAsyncWrapper(this.createUser.bind(this));
	}

	getAllUser(req, res) {
		return res.status(200).json(this.userService.getAllUser(req));
	}

	async createUser(req, res, next) {
		const { name, email, password } = req.body;
		const user = await this.userService.createUser({
			name,
			email,
			password,
		});
		return res.status(201).json({
			success: true,
			statusCode: 201,
			user,
		});
	}
}

module.exports = new UserController();
