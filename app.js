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

const productRouter = require("./router/productRouter");

app.use(logger("dev"));
app.use(express.json());


app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use("/api/product", productRouter)

app.listen(3000, function () {
	console.log("Server started in port 3000");
});
