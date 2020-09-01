const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
        {
            test: /\.vue$/,
            use: [{loader: 'vue-loader',}]
        },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'] // 从右向左解析原则
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options:{
          appendTsSuffixTo:[/\.vue/]
        }
      },
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ],
  resolve: { 
    alias: { 
        'vue': 'vue/dist/vue.js' 
    },
    extensions : ['.js', '.ts'] 
  }
}