
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve(__dirname, "../static/js/"),
	filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
	  {
		test: /\.css$/,
		use: [
			'vue-style-loader',
			MiniCssExtractPlugin.loader,
			'css-loader',
		]
	}
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
	new MiniCssExtractPlugin({
      filename: '../css/app.css',
      
    }),
  ],
  resolve: {
    alias: {
       vue: 'vue/dist/vue.js'
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
};