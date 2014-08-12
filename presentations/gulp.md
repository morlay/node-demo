title: Gulp
author:
  name: Morlay
  email: jlwang@thoughtworks.com
controls: true

--

<style> img{ max-width:90%; display:block; margin:0 auto; } </style>

![Gulp](images/gulp-logo.svg)

## the streaming build system

--

### Why Gulp ?

![Diff Gulp & Grunt](images/diff-gulp-grunt.svg)

--

### [Stream](http://nodejs.org/api/stream.html)

like UNIX pipes

    $ cut -f 1 | sort | uniq -c | sort -n | tac`

IO-IO-IO-IO-IO,

    process.stdin.pipe(new Cut({ field: 1 }))
        .pipe(new Sort)
        .pipe(new Uniq({ count: true })
        .pipe(new Sort({ numeric: true })
        .pipe(new Reverse);
--

![stream-stream](images/stream-stream.jpg)

--

![streams](images/streams.svg)

--

* [stream handbook](https://github.com/substack/stream-handbook)
* [stream playground](http://nodestreams.com/)


* [event-stream](https://www.npmjs.org/package/event-stream)
* [through2](https://www.npmjs.org/package/through2)



--

### [vinyl-fs](https://www.npmjs.org/package/vinyl-fs)

* [minimatch](https://www.npmjs.org/package/minimatch) -> [glob](https://www.npmjs.org/package/glob)
* [globule](https://www.npmjs.org/package/globule) & [glob-stream](https://www.npmjs.org/package/glob-stream)
* [vinyl](https://www.npmjs.org/package/vinyl)

--

### gulp

* `gulp.task`, to register a processor(stream) into gulp
* `gulp.start`, to run a task which has be registered
* [run-sequence](https://www.npmjs.org/package/run-sequence), let gulp task can run in sync mode
* [gulp-util](https://www.npmjs.org/package/gulp-util)
  - `gutil.colors`, equal [chalk](https://www.npmjs.org/package/chalk)
  - `gutil.log`, wrap this `console.log`
  - `gutil.noop`, let stream skip by conditionals