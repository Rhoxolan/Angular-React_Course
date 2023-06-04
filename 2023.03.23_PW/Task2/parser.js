function Parser(text) {
    let lines = text.split('\n');
    let result = {};
    lines.forEach(line => {
        let parts = line.split(' ');
        let key = parts[1];
        let count = parseInt(parts[2]);
        if (result[key]) {
            result[key] += count;
        } else {
            result[key] = count;
        }
    });
    return result;
}

module.exports = Parser;