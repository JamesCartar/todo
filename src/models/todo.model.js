const db = require("../db/db");

const createTodoTable = async () => {
	const query = `
		create table if not exists todos (
			id int primary key auto_increment,
			user_id int,
			text varchar(300) not null,
			completed_flag bool default 0,

			foreign key (user_id) references users(id)
		)
	`;

	db.query(query);
};

module.exports = { createTodoTable };