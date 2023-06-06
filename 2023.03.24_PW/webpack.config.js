const path = require('path');

module.exports = {
    entry: "./dev/app.js",
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'scripts.js'
    }
  };