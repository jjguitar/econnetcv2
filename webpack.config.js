const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();

const isDev = (process.env.ENV === 'development');
const entry = ['./src/frontend/index.js'];

if (isDev) {
  entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true');
}

module.exports = {
	entry,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'assets/app.js',
		publicPath: '/'
	},
	mode: process.env.ENV,
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
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(svg|jpg|gif|png)$/,
        use: [
          {
            'loader': 'file-loader',
            options: {
                name: 'assets/[md5:hash].[ext]',
            }
          }
        ]
			}
		]
	},
	plugins: [
    isDev ? new webpack.HotModuleReplacementPlugin() :
      () => { },
		new MiniCssExtractPlugin({
			filename: 'assets/app.css'
		}),
	],
	devServer: {
		historyApiFallback: true,
    port: 3000,
	}
}
