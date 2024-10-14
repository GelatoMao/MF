const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    // publicPath: 'http://localhost:3000' // 不是一个目录，是一个地址
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ModuleFederationPlugin({
      filename: 'remoteEntry.js', // 向主机提供服务的文件名，构建输出的文件名
      name: 'remote', // 输出的模块名，作为一个远程容器，向外界提供服务，本质上是通过一个全局变量向外提供服务的
      exposes: {
        './NewsList': './src/NewsList' // 被远程引用时可暴露的资源路径及其别名，后者是当前的路径，前者是别名，必须要使用相对路径
      },
      remotes: {
        host: 'host@http://localhost:8000/remoteEntry.js'
      },
      shared: {
        react: {
          singleton: true, 
        },
        'react-dom': {
          singleton: true, 
        }
      }
    })
  ]
}