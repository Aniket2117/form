const mongoose = require("mongoose");

// Define the schema for the form collection
const formSchema = mongoose.Schema({
	name: { type: String, required: true, trim: true },
	email: {
		type: String,
		required: true,
		trim: true,
		match: [/.+@.+\..+/, "Please enter a valid email address"],
	},
	phone: {
		type: Number,
		required: true,
		trim: true,
	},
	age: {
		type: Number,
		required: true,
		min: [0, "Age must be a positive number"],
	},
	gender: {
		type: String,
		required: true,
		trim: true,
	},
});

// Create the form model based on the schema
const Form = new mongoose.model("form", formSchema);

// Export the form model
module.exports = Form;
