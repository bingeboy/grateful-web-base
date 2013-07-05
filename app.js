
var app = require('express')()
    , server = require('http').createServer(app)
    , http = require('http')
	, gm = require('googlemaps')
	, util = require('util')
    , dates = require('./data/deadTour.json')
    , port  = 3000;

/*
 *  Express : Configure
 */
app.configure(function() {
    app.use(app.router);
});

//reverse geocode thee venue
//gm.geocode('giants stadium', function(err, data){
//	console.log(data);
//	util.puts(JSON.stringify(data));
//});

//emit the callback from geocode to pipe to client
var x = dates.showDates; 
var y = venues.showVenues;


for (var attrname in y) { 
		console.log(x[attrname],  y[attrname]);
	}

/*
 *  Routes : Handles URL mapping
 */
app.get('/', function (req, res) {
    res.sendfile('./index.html');
});


/*
 *  Run Server
 */
server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + port);
});
