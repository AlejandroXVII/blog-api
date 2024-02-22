const Post = require("../models/post");
const Comment = require("../models/comment");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
require("dotenv").config();
var jwt = require("jsonwebtoken");

//GET ALL THE COMMENT OF ALL POSTS
exports.comment_list_get = asyncHandler(async (req, res, next) => {
	const allComment = await Comment.find().exec();
	return res.send(Object.values(allComment));
});
//GET ONE COMMENT FROM A POST
exports.comment_get = asyncHandler(async (req, res, next) => {
	const comment = await Post.findById(req.params.id).exec();
	return res.send(Object.values(comment));
});
//POST A COMMENT IN A POST
exports.comment_post = asyncHandler(async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.send(400);
		return;
	} else {
		const comment_list = await Comment.findById(req.params.id).exec();
		const comment = {
			nickname: req.body.nickname,
			content: req.body.content,
		};
		comment_list.comments.push(comment);
		const updatedComment = await Comment.findByIdAndUpdate(
			req.params.id,
			comment_list,
			{}
		);
		return res.status(200).json(updatedComment);
	}
});

exports.comment_put = asyncHandler(async (req, res, next) => {
	return res.send(403);
});

//DELATE A COMMENT FROM A POST (NEED TO BE PASS THE ID OF THE COMMENT)
exports.comment_delate = asyncHandler(async (req, res, next) => {
	//VERIFY THAT THE USER HAS A VALID TOKEN
	jwt.verify(req.token, process.env.JWT_KEY, (err) => {
		if (err) return res.sendStatus(403);
	});

	const comment = await Comment.findById(req.params.id).exec();
	comment.comments = comment.comments.filter(
		(item) => String(item._id) !== req.body.id
	);
	if (comment) {
		const updatedComment = await Comment.findByIdAndUpdate(
			req.params.id,
			comment,
			{}
		);
		return res.status(200).json(updatedComment);
	} else {
		return res.send(400);
	}
});
