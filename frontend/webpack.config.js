const path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'src','index.js'),
    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },
    devServer:{
        static: path.resolve(__dirname,'public'), //responsável pelo web-pack-server
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
};