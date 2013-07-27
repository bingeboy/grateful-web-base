
var express = require('express')
    , htpp = require('http')
    , http = require('http')
	, gm = require('googlemaps')
    , dates = require('./data/deadTour.json')
    , fs       = require('fs')
    , http     = require('http')
    , util     = require('util')
    , path     = require('path');

var app = express();


/*
 * connect middleware
 */
app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser({ keepExtensions: true, uploadDir: __dirname + '/public/uploads' }));
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.errorHandler());
});
	
//reverse geocode thee venue
//gm.geocode('giants stadium', function(err, data){
//	console.log(data);
//	util.puts(JSON.stringify(data));
//});

/*
 *  Routes : Handles URL mapping
 */
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});


app.get('/example', function (req, res) {
    res.sendfile(__dirname + '/example-no-geoloc.html');
});

/*
 *  Run Server
 */
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
