const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
require("./db/conn");
const Form = require("./models/form");

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));

app.post("/submit", async (req, res) => {
	try {
		// const { name, email, phone, age, gender } = req.body;
		const formData = new Form(req.body);

		await formData.save();
		res.status(201).json({ ok: 1, message: "Form submitted successfully"});
	} catch (error) {
		console.log(error.message);
		// Handle validation and other errors
		res.status(400).json({
			ok: 0,
			message: "Error submitting form",
			error: error.message,
		});
	}
});

app.listen(port, () => {
	console.log(`Server is running at PORT: ${port}`);
});
