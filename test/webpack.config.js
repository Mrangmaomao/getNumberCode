const webpack = require('webpack');
const path = require('path');
module.exports ={
    entry: {
        main: './lib/numCode.js'
    },
    output: {
        path: path.join( __dirname, './dist' ),
        filename: "numCode.chunk.js"
    },
    module : {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
            }
        ]
    }
}