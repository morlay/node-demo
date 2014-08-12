var request = require("request");
var es = require("event-stream");
var csv = require('csv-streamify');
var Handlebars = require("handlebars");
var fs = require('fs');

// HTTP GET Request
request("http://nodestreams.com/input/people.csv")
  .pipe(es.wait())
  .pipe(csv({objectMode: true, columns: true}))
  .pipe(es.mapSync(function (data) {
    return Handlebars.compile('<li><a href="{{URL}}">{{Name}}</a> ({{City}})</li>')(data);
  }))
  .pipe(fs.createWriteStream('./test.html'));
