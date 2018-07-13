const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        loader: 'babel-loader',
        include: /src/,
        options: {
          presets: ['env', 'react']
        }
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }

    ] // rules
  }, // module

  plugins: [

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false
    }),

  ]

};
