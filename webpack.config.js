const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const NodemonWebPackPlugin = require('nodemon-webpack-plugin'); 

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
    new NodemonWebPackPlugin({
      // If using more than one entry, you can specify
      // which output file will be restarted.
      script: './dist/server.js',
  
      // What to watch.
      watch: path.resolve('./dist'),
  
      // Arguments to pass to the script being watched.
      args: ['demo'],
  
      // Node arguments.
      nodeArgs: ['--debug=9222'],
  
      // Files to ignore.
      ignore: ['*.js.map'],
  
      // Extensions to watch.
      ext: 'js,njk,json',
      
      // Unlike the cli option, delay here is in milliseconds (also note that it's a string).
      // Here's 1 second delay:
      delay: "1000",
  
      // Detailed log.
      verbose: true, 
    })
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
  },
}
