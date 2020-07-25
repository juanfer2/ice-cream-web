const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".js", ".jsx", '.json', '*']
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules/'),
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              // ...
              // Importing Ant here is not needed if you are using a .babelrc file
              [
                'import',
                {
                  libraryName: 'antd',
                  libraryDirectory: 'es', // or "lib" for default
                  // No "style" setting
                },
                
              ],
            ],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif|JPG)$/,
        use: ['file-loader']
      },
      {
        test: /\.(css|sass)$/,
        issuer: {
          exclude: /\.less$/,
        },
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
    }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      favicon: path.resolve(__dirname, './public/favicon.ico'),
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: true
    }),
    new Dotenv(),
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
  },
}
