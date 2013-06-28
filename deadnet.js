var nodeio = require('node.io');
var methods = {
    input: false,
    run: function() {

        var showDateArray = []
            ,showVenueArray = [];

        for (var i = 10; i < 116; i++){
                this.getHtml('http://www.dead.net/shows?page='+i, function(err, $) {

                    var showDate = 'div#content div.item-list div.views-field .date-display-single';
                    var showVenue = 'div#content div.item-list div.views-field a[href^="/venue/"]';
                    //Handle any request / parsing errors
                    if (err) this.exit(err, 'test on error is here');
                    //Select all dates on the page
                    if(showDate){
                        $(showDate).each(function(a) {
                            console.log('date: ',a.text);
                            //showDateArray.push(a.text);
                        });

                        $(showVenue).each(function(a) {
                            console.log('venue: ', a.text);
                            //showVenueArray.push(a.text);
                        });

                        //console.log(showDate);
                        this.emit(showVenue);
                    }
                });
        }



    }
}

exports.job = new nodeio.Job({timeout:100000}, methods);