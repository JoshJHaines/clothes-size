const express = require("express")
const router = express.Router();

router.get("/", function (req, res) {
	res.json("Hello")
    // res.render("index", {
	// 	user: "Josh",
	// 	info: ["likes hockey", "plays DnD", "lives in NC"],
	// });
});


module.exports = router