var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From US" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Helloo Love" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, Its fine!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
