const CustomerApiError = require("./customerApiError.util.error");

class UnAuthenticatedError extends CustomerApiError {
	constructor(message) {
		super(message);
		this.statusCode = 401;
	}
}

module.exports = { UnAuthenticatedError };
