const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'auto'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(jpeg|jpg|png)/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 90 * 1024
                    }
                }

            }, {
                test: /\.txt$/,
                type: 'asset/source'
            }
        ]
    }
};
