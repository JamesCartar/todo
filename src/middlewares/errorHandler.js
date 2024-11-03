const errorHandler = (err, req, res, next) => {
	console.log(err); // Log error for debugging

	if (err.code === "ER_DUP_ENTRY") {
		// MySQL duplicate entry error
		return res.status(409).json({ message: "Email already exists" });
	}

	// Handle other types of errors
	if (err.statusCode) {
		// Custom error with statusCode
		return res.status(err.statusCode).json({ message: err.message });
	}

	// Fallback for unhandled errors
	return res.status(500).json({ message: "Internal Server Error" });
};

module.exports = errorHandler;
