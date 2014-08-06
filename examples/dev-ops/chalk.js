// https://www.npmjs.org/package/chalk
var chalk = require('chalk');

console.log(chalk.magenta('================= console.log by chalk ================'));
console.log(chalk.blue('hello'));
console.log(chalk.underline.red('i like cake and pies'));
console.log(chalk.inverse('inverse the color'));
console.log(chalk.red('Hello', chalk.underline('world') + '!'));
console.log(chalk.green('I am a green line ' + chalk.blue('with a blue substring') + ' that becomes green again!'));