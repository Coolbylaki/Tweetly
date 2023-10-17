import Joi from "joi";

export const registerSchema = Joi.object({
	email: Joi.string()
		.email({ tlds: { allow: false } }) // Disallow TLDs like .co.uk
		.trim()
		.required(),

	password: Joi.string()
		.min(8)
		.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/) // Strong password requirements
		.required()
		.messages({
			"string.pattern.base":
				"Password must have at least one lowercase letter, one uppercase letter, one digit, and one special character.",
		}),

	name: Joi.string().min(4).max(50).trim().required(),
});
