const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: './src/app.jsx',
	output: {
		filename: 'js/app-[hash:6].js',
		path: path.resolve(__dirname, 'public')
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		}
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	plugins: [
		new CleanWebpackPlugin(['public']),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new ManifestPlugin(),
		new MiniCssExtractPlugin({
	    	filename: "css/app-[hash:6].css",
	    	chunkFilename: "[id].css"
	    }),
	    new CopyWebpackPlugin([{
	    	from: './src/images',
	    	to: 'img'
	    }])
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName: '[name]-[local]'
							sourceMap: true,
						}
					},
					 {
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							config: {
								path: './postcss.config.js'
							}
						}
					},
					{
						loader: "less-loader",
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	}
};