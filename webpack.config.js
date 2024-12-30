const path = require('path');

module.exports = {
    entry: './css/styles.css',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'styles.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
