var VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');


module.exports = {
  entry: './frontend/src/index.ts',
  mode:'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.vue'],
    alias:{
      'vue':'vue/dist/vue.js'
    }
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new VueLoaderPlugin()
  ]
};