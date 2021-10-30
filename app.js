const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
	res.status(200).json({
		message: "Server is running",
	});
});

app.listen(PORT, () => {
	console.log("🚀 ~ file: app.js ~ line 15 ~ app.listen ~ PORT", PORT);
});
