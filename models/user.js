const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	full_name: { type: String, required: true },
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	is_admin: { type: Boolean },
});

userSchema.virtual("url").get(function () {
	// We don't use an arrow function as we'll need the this object
	return `/users/${this._id}`;
});

module.exports = mongoose.model("user", userSchema);
