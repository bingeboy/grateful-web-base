var fs = require('fs');


var rs = fs.createReadStream('./data/dates.json');

rs.pipe(process.stdout, { end : false });
