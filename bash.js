import { cwd } from 'node:process';

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const pwd = `${cwd()}`;

    process.stdout.write(pwd);
    process.stdout.write('\nprompt > ');
});