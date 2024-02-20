const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
	nickname: { type: String, required: true, maxLength: 200 },
	content: { type: String, required: true },
});

commentSchema.virtual("url").get(function () {
	// We don't use an arrow function as we'll need the this object
	return `/${this._id}`;
});

module.exports = mongoose.model("comment", commentSchema);
