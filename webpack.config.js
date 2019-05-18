const webpack = require('webpack')

const fs = require('fs')

const path = require('path')

const dotenv = require('dotenv')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = (env) => {
  const currentPath = path.join(__dirname)

  const basePath = currentPath + '/.env'

  const envPath = basePath + '.' + env.NODE_ENV

  const finalPath = fs.existsSync(envPath) ? envPath : basePath

  const fileEnv = dotenv.config({ path: finalPath }).parsed

  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next])
    return prev
  }, {})

  return {
    mode: 'development',
    devtool: 'source-map',
    entry: ['./client/index.js'],
    output: {
      path: path.resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      HtmlWebpackPluginConfig,
      new webpack.DefinePlugin(envKeys)
    ]
  }
}
