const mongoose = require("mongoose");
const Post = require("./post");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
	post: { type: Schema.Types.ObjectId, ref: "post" },
	comments: [
		{
			nickname: { type: String, required: true },
			content: { type: String, required: true, maxLength: 200 },
		},
	],
});

commentSchema.virtual("url").get(function () {
	// We don't use an arrow function as we'll need the this object
	return `/comments/${this._id}`;
});

module.exports = mongoose.model("comment", commentSchema);
