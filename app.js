var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static('public'));

app.get('/getTitle', function (req, res) {
    var fileContent = fs.readFileSync('title.txt');
    if (fileContent) {
        res.send(fileContent);
        console.log('file read' + fileContent);
    } else {
        res.send('no title found');
    }
});

app.get('/getItems', function (req, res) {
    var fileContent = fs.readFileSync('mock/items.json');
    if (fileContent) {
        res.send(fileContent);
        console.log('file read' + fileContent);
    } else {
        res.send('no title found');
    }
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});