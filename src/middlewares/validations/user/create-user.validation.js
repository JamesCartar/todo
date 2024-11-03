const Joi = require("joi");

const createUserSchema = Joi.object({
	name: Joi.string().min(3).max(30).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(8).required(),
});

const createUserValidation = (req, res, next) => {
	const { error } = createUserSchema.validate(req.body);

	if (error)
		return res.status(400).json({
			success: false,
			statusCode: 400,
			message: error.details[0].message,
		});

	next();
};

module.exports = { createUserValidation };
