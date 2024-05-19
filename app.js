const express = require('express');

const app = express();

app.use(express.static("public"));
app.use(express.static(__dirname + "/public/" + "/images"));

app.get("/", (request, response) => {
	response.sendFile(__dirname + "/public/" + '/eblan.html');
})


app.listen(3000, ()=> {
	console.log("LIVE");
})