const Post = require("../models/post");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.post_list_get = asyncHandler(async (req, res, next) => {
	return res.json({ message: "Received a GET HTTP method" });
});

exports.post_get = asyncHandler(async (req, res, next) => {
	return res.json({ message: "Received a GET HTTP method" });
});

exports.post_post = asyncHandler(async (req, res, next) => {
	return res.json({ message: "Received a POST HTTP method" });
});

exports.post_put = asyncHandler(async (req, res, next) => {
	return res.json({ message: "Received a PUT HTTP method" });
});

exports.post_delate = asyncHandler(async (req, res, next) => {
	return res.json({ message: "Received a DELATE HTTP method" });
});
