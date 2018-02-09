var express = require('express');
var app = express();
var request = require('request');
var fs = require('fs');
var filesystem = [];
fs.readdir("video/", function (err, files) {
    if (err) {
        return console.error(err);
    }
    filesystem = files;
    // console.log(filesystem);
});
app.get('/', function (req, res) {
    res.render('video.ejs', {
        videos: filesystem
    });
});

app.use('/public', express.static(__dirname + '/public/'));
app.use('/video', express.static(__dirname + '/video/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/videojs', express.static(__dirname + '/node_modules/video.js/dist'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.listen(8080);