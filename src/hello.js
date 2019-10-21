console.log("Hi! What's your name?");
process.stdin.setEncoding('utf8');
const name;
process.stdin.on('readable', function() {
    name = process.stdin.read();
    if (name !== null) {
        console.log("Hello ".concat(name));
        process.exit();
    }
});
