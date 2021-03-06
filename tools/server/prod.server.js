const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "..","dist")));

app.get("/", function (request, response) {
    response.sendFile(__dirname + "../../dist/index.html");
});

app.listen(PORT, (error) => (error ? console.error(error) : console.info(`Listening on port ${PORT}.`)));
