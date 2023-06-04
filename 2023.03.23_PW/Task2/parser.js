function Parser(text) {
    let lines = text.split('\n');
    let result = {};
    lines.forEach(line => {
        let parts = line.split(' ');
        result[parts[0]] = parts.length;
    });
    return result;
}

module.exports = Parser;