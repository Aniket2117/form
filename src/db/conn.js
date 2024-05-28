require("dotenv").config();
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
	.connect(process.env.DATABASE_URL)
	.then(() => {
		console.log("Connection successful to MongoDB...");
	})
	.catch((error) => {
		console.error("Connection failed to MongoDB:", error);
	});
