var nodeio = require('node.io');
var methods = {
    input: false,
    run: function() {
        this.getHtml('http://www.reddit.com/', function(err, $) {

            //Handle any request / parsing errors
            if (err) this.exit(err);

            var titles = [], scores = [], output = [];

            //Select all titles on the page
            $('div#siteTable a.title').each(function(a) {
                titles.push(a.text); 
            });

            //Select all scores on the page
            $('div#siteTable div.score.unvoted').each(function(div) {
                scores.push(div.rawtext); //rawtext doesn't decode entities or trim the text
            });

            //Mismatch? page probably didn't load properly
            if (scores.length != titles.length) {
                this.exit('Title / score mismatch');
            }

            for (var i = 0, len = scores.length; i < len; i++) {
                //Ignore upcoming stories
                if (scores[i] == '&bull;') continue;

                //Check the data is ok
                this.assert(scores[i]).isInt();

                //Output = [score] title
                output.push('['+scores[i]+'] '+titles[i]);
            }

            this.emit(output);
        });
    }
}

exports.job = new nodeio.Job({timeout:10}, methods);