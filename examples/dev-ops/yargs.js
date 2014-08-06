// https://github.com/kss-node/kss-node/blob/master/bin/kss-node#L31

var argv = require('yargs')
  .usage('Usage: kss-node <sourcedir> <destdir> [options]\n\n<destdir> defaults to "styleguide" if not specified.')
  .check(function(args) {
    if (args._.length < 1 && !args.init) {
      throw new Error('Please provide a source directory');
    }
  })

  .alias('i', 'init')
  .describe('i', 'Create a new styleguide template to work from')

  .string('t')
  .alias('t', 'template')
  .describe('t', 'Use a custom template to build your styleguide')

  .string('m')
  .alias('m', 'mask')
  .describe('m', 'Use a custom mask for detecting stylesheets in the source directory, e.g. "*.css"')

  .string('c')
  .alias('c', 'css')
  .describe('c', 'Include a CSS stylesheet')

  .string('s')
  .alias('s', 'style')
  .describe('s', 'Compile and include a stylesheet - the precompiler is chosen based on file extension')

  .string('l')
  .alias('l', 'less')
  .describe('l', 'Compile and include a LESS stylesheet')

  .string('S')
  .alias('S', 'sass')
  .describe('S', 'Compile and include a SASS stylesheet')

  .string('y')
  .alias('y', 'stylus')
  .describe('y', 'Compile and include a Stylus stylesheet')

  .alias('L', 'load-path')
  .describe('L', 'Include a load path for precompiler imports')

  .argv;


console.log(argv);