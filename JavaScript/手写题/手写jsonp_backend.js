const express = require("express");
const cors = require("cors");
const app = express();

app.get("/api/jsonp", (req, res) => {
	/* 
  script.src = 'http://example.com/api/data?callback=handleResponse'; 对应前端callback后的参数
  */
	const callback = req.query.callback;

	const data = { message: "test" };

	res.send(`${callback}(${JSON.stringify(data)})`);
});

app.get("/api/data", cors(), (req, res) => {
	/* 
  script.src = 'http://example.com/api/data?callback=handleResponse'; 对应前端callback后的参数
  */
	const callback = req.query.callback;

	const data = { message: "test" };

	res.send(`${JSON.stringify(data)}`);
});

const port = 3001;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
