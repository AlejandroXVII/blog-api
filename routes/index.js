var express = require("express");
var router = express.Router();
const post_controller = require("../controllers/postController");

router.get("/posts", post_controller.post_list_get);

router.get("/posts/:id", post_controller.post_get);

router.post("/posts/", post_controller.post_post);

router.put("/posts/:id", post_controller.post_put);

router.delete("/posts/:id", post_controller.post_delate);

module.exports = router;
