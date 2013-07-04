var nodeio = require('node.io'), options = {timeout: 10};

exports.job = new nodeio.Job(options, {
    input: ['hello', 'foobar', 'weather'],
    run: function (keyword) {
        this.getHtml('http://www.google.com/search?q=' + encodeURIComponent(keyword), function (err, $) {
            var results = $('#resultStats').text.toLowerCase();
            this.emit(keyword + ' has ' + results);
        });
    }
});