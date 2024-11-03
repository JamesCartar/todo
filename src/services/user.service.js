const db = require("../db/db");
const serviceAsyncWrapper = require("../utilities/serviceAsyncWrapper.util");
const { hashPassword } = require("../utilities/password.util");

class UserService {
	constructor() {
		this.getAllUser = serviceAsyncWrapper(this.getAllUser.bind(this));
		this.createUser = serviceAsyncWrapper(this.createUser.bind(this));
	}

	getAllUser() {
		return {
			success: true,
			statusCode: 200,
			data: [],
		};
	}

	async createUser({ name, email, password }) {
		const hashedPassword = await hashPassword(password);
		const insertQuery = `
				insert into users(name, email, password)
				values (?, ?, ?);
			`;
		const result = await db.query(insertQuery, [
			name,
			email,
			hashedPassword,
		]);

		if (result && result[0].affectedRows) {
			const getQuery = `
					select 	id,
							name,
							email,
							created_at
					from	users
					where	email = ?;
				`;
			const user = db.query(getQuery, [email]);
			return user;
		}
	}
}
module.exports = UserService;
