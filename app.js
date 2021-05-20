const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();


const productRouter = require("./routes/productRouter")

app.use(logger("dev"));
app.use(express.json());

app.set("view engine", "ejs");

app.listen(3000, function () {
	console.log("Server started in port 3000");
});
