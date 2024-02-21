var express = require("express");
var router = express.Router();
const post_controller = require("../controllers/postController");
const user_controller = require("../controllers/userController");

//POST ROUTERS

router.get("/posts", post_controller.post_list_get);

router.get("/posts/:id", post_controller.post_get);

router.post("/posts/", post_controller.post_post);

router.put("/posts/:id", post_controller.post_put);

router.delete("/posts/:id", post_controller.post_delate);

module.exports = router;

//USER ROUTERS

router.get("/users", user_controller.user_list_get);

router.get("/users/:id", user_controller.user_get);

router.post("/users/", user_controller.user_post);

router.put("/users/:id", user_controller.user_put);

router.delete("/users/:id", user_controller.user_delate);

// LOGIN ROUTERS
router.post("/login", user_controller.user_login);

module.exports = router;
