const Joi = require("joi");
const { BadRequestError } = require("../../../utilities/errors");

const getAllUserSchema = Joi.object({
	name: Joi.string().trim().optional(),
	email: Joi.string().trim().email().optional(),
	start_date: Joi.date().iso().optional(),
	end_date: Joi.date().iso().optional(),
});

const getAllUserValidator = (req, res, next) => {
	const { error, value } = getAllUserSchema.validate(req.query, {
		stripUnknown: true,
		convert: true,
	});
	if (error) throw new BadRequestError(error.details[0].message);

	// setting transformed value to request query object
	req.query = value;
	next();
};

module.exports = { getAllUserValidator };
