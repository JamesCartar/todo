const CustomerApiError = require("./customerApiError.util.error");

class BadRequestError extends CustomerApiError {
	constructor(message) {
		super(message);
		this.statusCode = 400;
	}
}

module.exports = { BadRequestError };
