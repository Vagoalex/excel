const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

const filename = ext => isDevelopment ? `bundle.${ext}` : `bundle.[hash].${ext}`;

module.exports = {
	context: path.resolve(__dirname, "src"),
	mode: "development",
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: filename("js"),
		clean: true
	},
	resolve: {
		extensions: [".js"],
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@core": path.resolve(__dirname, "src/core")
		}
	},
	devtool: isDevelopment ? "source-map" : false,
	devServer: {
		port: 8080,
		host: "127.0.0.1",
		hot: isDevelopment
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html",
			minify: {
				removeComments: isProduction,
				collapseWhitespace: isProduction
			}
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src/public/icons/favicon.ico"),
					to: path.resolve(__dirname, "./dist")
				}
			]
		}),
		new MiniCssExtractPlugin({
			filename: filename("css")
		})
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			}
		]
	}
};