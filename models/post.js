const mongoose = require("mongoose");
const User = require("./user");
const Comment = require("./comment");

const Schema = mongoose.Schema;

const postSchema = new Schema({
	tittle: { type: String, required: true, maxLength: 200 },
	content: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: User },
	date: { type: Date },
	comment: [{ type: Schema.Types.ObjectId, ref: Comment }],
});

postSchema.virtual("url").get(function () {
	// We don't use an arrow function as we'll need the this object
	return `/posts/${this._id}`;
});

module.exports = mongoose.model("post", postSchema);
