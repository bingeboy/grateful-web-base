var app = require('express')()
    , server = require('http').createServer(app)
    , express = require('express')
    , http = require('http')
    , dates = require('./data/dates')
    , venues = require('./data/venues')
    , port  = 3000;


console.log('dates: ', dates.showDates.length);
console.log('Venue: ', venues.showVenue.length);

/*
 *  Express : Configure
 */
app.configure(function() {
    app.use(app.router);
});

server.listen(port);
console.log("server.listen on port: ", port);


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