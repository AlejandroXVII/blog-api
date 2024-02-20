const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = mongoose.model(
	"user",
	new Schema({
		full_name: { type: String, required: true },
		username: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		is_status: { type: Boolean },
	})
);

module.exports = User;
