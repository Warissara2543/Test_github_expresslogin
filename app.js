var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("WWW"));

app.get('/profile', function (request, response) {
    var output = "";
    output += "<head>";
    output += "</head>";
    output += "<html>";
    response.send(output);
}

app.post('/login', function (request, response) {
    var username = request.body.username
    var password = request.body.password
    if (username === "admin" && password === "abc1234") {
        response.send('Login Sucessd');
    } else {
        response.send('Login Fail');
    }
});
app.listen(4001);