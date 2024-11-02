// if (process.env.NODE_ENV === "development") {
require("dotenv").config();
// }
const express = require("express");
const route = require("./src/routes");
const initTables = require("./src/models/index");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

app.get("/", route);

initTables()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is listening on port: ${PORT}`);
		});
	})
	.catch((error) => {
		console.error("Error initializing tables: ", error);
	});
