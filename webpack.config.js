var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/Comparison.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'Comparison.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}