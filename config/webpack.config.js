const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const cleanOptions={
	root: path.resolve(__dirname),
	// exclude: ['shared.js'],
	verbose: true,
	dry: false,
};
module.exports = {
	mode: "production",
  entry: {
    index:'./src/index',
		datatype:'./src/data-type',
		numberfun:'./src/numberfun',
		stringfun:'./src/stringfun',
		arrayfun:'./src/Array'
	},
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
		// 先尝试以ts为后缀的TypeScript源码文件
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude:/node_modules/,
				options: {
					configFile: path.resolve(__dirname, '../tsconfig.json'),
			},
			},
			{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
    }
		]
	},
	plugins: [new CleanWebpackPlugin(cleanOptions)],
};