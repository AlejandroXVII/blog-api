var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.json({ message: "welcome fellow student" });
});

module.exports = router;
