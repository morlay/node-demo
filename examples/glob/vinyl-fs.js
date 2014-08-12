var vfs = require('vinyl-fs');
var es = require('event-stream');
var colors = require('colors');

vfs.src('**/*.js')
  .pipe(es.mapSync(function (file) {
    console.log(file.path);
    console.log(file.base.cyan, file.relative.yellow);
//    console.log(String(file.contents).red);
  }));