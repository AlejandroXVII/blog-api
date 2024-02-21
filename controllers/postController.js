const Post = require("../models/post");
const Comment = require("../models/comment");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.post_list_get = asyncHandler(async (req, res, next) => {
	return res.send(Object.values(something));
});

exports.post_get = asyncHandler(async (req, res, next) => {
	return res.send({ message: "Received a GET HTTP method" });
});

exports.post_post = [
	asyncHandler(async (req, res, next) => {
		const errors = validationResult(req);

		const post = new Comment({
			nickname: "holojandron",
			content: "it work! congratulation!",
		});
		if (!errors.isEmpty()) {
			res.send(400);
			return;
		} else {
			// Data from form is valid
			await post.save();
			const newTodo = "pollito chiquen";
			something.push(newTodo);
			res.status(201).json(newTodo);
		}
	}),
];

exports.post_put = asyncHandler(async (req, res, next) => {
	return res.send({ message: "Received a PUT HTTP method" });
});

exports.post_delate = asyncHandler(async (req, res, next) => {
	return res.send({ message: "Received a DELATE HTTP method" });
});
