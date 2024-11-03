const serviceAsyncWrapper = (serviceFunction) => {
	return async (req) => {
		try {
			return await serviceFunction(req);
		} catch (error) {
			throw error;
		}
	};
};

module.exports = serviceAsyncWrapper;
