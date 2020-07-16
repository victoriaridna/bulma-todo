const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, '/public'),
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							babelrc: false,
							presets: [
								[
									'@babel/preset-env',
									{
										targets: {
											browsers: ['last 2 versions', 'ie >= 10'],
										},
										modules: false,
									},
								],
								"@babel/preset-react",
							],
							plugins: ["@babel/plugin-proposal-class-properties",
								"@babel/plugin-transform-async-to-generator"]
						},
					},
				],
			},
			{
				test: /\.(sass|css)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				]
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		}),
		new MiniCssExtractPlugin(
			{
				filename: '[name].css',
				chunkFilename: '[id].css',
			}
		)
	],
	devServer: {
		historyApiFallback: true,
		port: 3000
	},
	resolve: {
		extensions: [".js", ".jsx"],
		modules: ['./node_modules' , './src'],
	},
};