var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Me" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello Panda" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It gud!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
