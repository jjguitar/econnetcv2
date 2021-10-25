const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: ['./src/frontend/index.js',  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(__dirname, 'src/frontend/components/'),
			'@containers': path.resolve(__dirname, 'src/frontend/containers/'),
			'@pages': path.resolve(__dirname, 'src/frontend/pages/'),
			'@routes': path.resolve(__dirname, 'src/frontend/routes/'),
			'@styles': path.resolve(__dirname, 'src/frontend/styles/'),
			'@icons': path.resolve(__dirname, 'src/frontend/assets/icons/'),
			'@logos': path.resolve(__dirname, 'src/frontend/assets/logos/'),
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset'
			}
		]
	},
	plugins: [
    new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	],
	devServer: {
		historyApiFallback: true,
    port: 3000,
	}
}
