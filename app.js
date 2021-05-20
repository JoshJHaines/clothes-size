let productsArray = [
	{
		id: "1",
		name: "pants",
	},
	{
		id: "2",
		name: "shorts",
	},
	,
	{
		id: "3",
		name: "shirts",
	},
];

const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();

const productRouter = require("./routes/productRouter");

app.use(logger("dev"));
app.use(express.json());


app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.get("/api/product", function (req, res) {
	res.render("index", {
		user: "Josh",
		info: ["likes hockey", "plays DnD", "lives in NC"],
	});
});

app.listen(3000, function () {
	console.log("Server started in port 3000");
});
