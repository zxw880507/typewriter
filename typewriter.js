const sentence = 'hello there from lighthouse labs';
let i = 0;
for (const char of sentence) {
    if (i === sentence.length - 1) {
        setTimeout(() => {
            process.stdout.write(char + '\n');
        }, 50 * (++i));
    } else {
        setTimeout(() => {
            process.stdout.write(char);
        }, 50 * (++i));
    }
}