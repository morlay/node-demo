title: Gulp
author:
  name: Morlay
  email: jlwang@thoughtworks.com
controls: true

--

<style> img{ display:block; margin:0 auto; } </style>

![Gulp](images/gulp-logo.svg)

## the streaming build system

--

### Why Gulp ?

![Diff Gulp & Grunt](images/diff-gulp-grunt.svg)

--

### [Stream](http://nodejs.org/api/stream.html)


    processorC(processorB(processorA(input,optsA),optsB),optsC) // return output

    inputStream
      .pipe(processorA(optsA))
      .pipe(processorB(optsB))
      .pipe(processorC(optsC))
      .pipe(outputStream)


    inputStream
      .pipe(processorA(optsA))
      .on('eventA',function(){})
      .pipe(processorB(optsB))
      .on('eventB',function(){})
      .pipe(processorC(optsC))
      .on('eventC',function(){})
      .pipe(outputStream)