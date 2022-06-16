const { cwd } = require('node:process');

module.exports = function() {
    process.stdout.write('prompt > ');

    process.stdin.on('data', (data) => {
    const pwd = `${cwd()}`;

    process.stdout.write(pwd);
    process.stdout.write('\nprompt > ');
});
} 
