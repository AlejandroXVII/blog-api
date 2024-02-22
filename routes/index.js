var express = require("express");
var router = express.Router();
const post_controller = require("../controllers/postController");
const user_controller = require("../controllers/userController");
const comment_controller = require("../controllers/commentController");

function verifyToken(req, res, next) {
	// Get auth header value
	const bearerHeader = req.headers["authorization"];
	// Check if bearer is undefined
	if (typeof bearerHeader !== "undefined") {
		// Split at the space
		const bearer = bearerHeader.split(" ");
		// Get token from array
		const bearerToken = bearer[1];
		// Set the token
		req.token = bearerToken;
		// Next middleware
		next();
	} else {
		// Forbidden
		res.sendStatus(403);
	}
}

//POST ROUTERS

router.get("/posts", post_controller.post_list_get);

router.get("/posts/:id", post_controller.post_get);

router.post("/posts/", verifyToken, post_controller.post_post);

router.put("/posts/:id", verifyToken, post_controller.post_put);

router.delete("/posts/:id", verifyToken, post_controller.post_delate);

module.exports = router;

//USER ROUTERS

router.get("/users", user_controller.user_list_get);

router.get("/users/:id", user_controller.user_get);

router.post("/users/", user_controller.user_post);

router.put("/users/:id", user_controller.user_put);

router.delete("/users/:id", user_controller.user_delate);

//COMMENTS ROUTERS

router.get("/comments", comment_controller.comment_list_get);

router.get("/comments/:id", comment_controller.comment_get);

router.post("/comments/:id", comment_controller.comment_post);

router.put("/comments/:id", comment_controller.comment_put);

router.delete("/comments/:id", verifyToken, comment_controller.comment_delate);

// LOGIN ROUTERS
router.post("/login", user_controller.user_login);

module.exports = router;
