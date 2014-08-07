title: Dev Ops by Node
author:
  name: Morlay
  email: jlwang@thoughtworks.com
controls: true

--

<style> img{ display:block; margin:0 auto; } </style>

# Dev Ops by Node

## simpler and faster our dev ops

--

### Env Variables && Options

Send arguments to node program.


* [process.env (core)](http://nodejs.org/api/process.html#process_process_env)
* [process.argv (core)](http://nodejs.org/api/process.html#process_process_argv)
  - [minimist](https://www.npmjs.org/package/minimist)
  - [yargs](https://www.npmjs.org/package/yargs), <small>from [optimist](https://www.npmjs.org/package/optimist)</small>
  - [nopt](https://www.npmjs.org/package/nopt)

--

### Dress the Log Info

Highlight the content.

* [chalk](https://www.npmjs.org/package/chalk)
* [colors](https://www.npmjs.org/package/colors)

--

### Prompts

A user interface.

* [prompt](https://www.npmjs.org/package/prompt), <small>e.q. `phonegap remote login` </small>
* [inquirer](https://www.npmjs.org/package/inquirer), <small>e.q. `bower init` </small>
* [promzard](https://www.npmjs.org/package/promzard), <small>e.q. `npm init`, from [prompter](https://www.npmjs.org/package/prompter) </small>

--

### Shell

* [child_process (core)](http://nodejs.org/api/child_process.html)
  - [spawn](http://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options)
  - [exec](http://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)
  - [execFile](http://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback)
  - [fork](http://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options)
* [shelljs](https://www.npmjs.org/package/shelljs)

--

### File System && Path

* [fs (core)](http://nodejs.org/api/fs.html)
  - `async` and `sync`
  - [graceful-fs](https://www.npmjs.org/package/graceful-fs), <small>to normalize behavior </small>
  - [fs-extra](https://www.npmjs.org/package/fs-extra), <small>add some api like `mkdirp`</small>
* [path (core)](http://nodejs.org/api/path.html)
  - `__dirname`
  - `process.cwd()`

--

### Template Engine

* [consolidate](https://www.npmjs.org/package/consolidate), all in one


    "xxxxxxxxxxxxxxxxxxxx {{ data }} xxxxxxxxxxxxxxxxx"

    { data:'I am the data placeholder'}

    "xxxxxxxxxxxxxxxxxxxx I am the data placeholder xxxxxxxxxxxxxxxxx"


--

![dev-ops](images/dev-ops.svg)