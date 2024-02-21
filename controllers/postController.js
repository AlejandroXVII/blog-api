const Post = require("../models/post");
const Comment = require("../models/comment");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

//GET ALL THE POSTS
exports.post_list_get = asyncHandler(async (req, res, next) => {
	const allPost = await Post.find().exec();
	return res.send(Object.values(allPost));
});
//GET ONE POST
exports.post_get = asyncHandler(async (req, res, next) => {
	const post = await Post.findById(req.params.id).exec();
	return res.send(Object.values(post));
});
//POST POST
exports.post_post = asyncHandler(async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.send(400);
		return;
	} else {
		const comment = new Comment({});
		const commentResult = await comment.save();
		const post = new Post({
			tittle: req.body.tittle,
			content: req.body.content,
			user: req.body.user,
			date: new Date(),
			comment: commentResult._id,
		});
		await post.save();
		return res.status(200).json(post);
	}
});

exports.post_put = asyncHandler(async (req, res, next) => {
	const errors = validationResult(req);

	const post = new Post({
		tittle: req.body.tittle,
		content: req.body.content,
		_id: req.params.id,
	});

	if (!errors.isEmpty()) {
		return res.send(400);
	} else {
		await Post.findByIdAndUpdate(req.params.id, post, {});
		return res.send(200).json(post);
	}
});

//DELATE POST AND THE COMMENTS
exports.post_delate = asyncHandler(async (req, res, next) => {
	const post = await Post.findById(req.params.id).exec();
	if (post) {
		await Post.findByIdAndDelete(req.params.id);
		await Comment.findByIdAndDelete(post.comment);
		return res.send(200);
	} else {
		return res.send(400);
	}
});
