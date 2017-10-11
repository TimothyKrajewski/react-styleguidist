const path = require('path');

const dir = path.resolve(__dirname, 'src');
module.exports = {
	title: 'v1.0',
	pages: [
		{
			id: 'readme',
			name: 'Readme File',
			sections: [],
		},
		{
			id: 'styleguide',
			name: 'Styleguide',
			components: dir + '/components/Modal/Modal.js',
			//content: dir + '/components/Modal/Readme.md',
			//sections: [],
			sections: [
				{
					name: 'Components',
					components: dir + '/components/**/[A-Z]*.js',
				},
				{
					name: 'Documentation',
					content: 'docs/Two.md',
				},
				{
					name: 'First File',
					content: 'docs/One.md',
				},
			],
		},
		{
			id: 'exampleBut',
			name: 'Button',
			//components:  dir + '/components/Button/**/[A-Z]*.js',
			sections: [
				{
					name: 'Second File',
					content: 'docs/Two.md',
				},
			],
			content: dir + '/components/Button/Readme.md',
		},
	],
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					include: dir,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					include: dir,
					loader: 'style-loader!css-loader?modules',
				},
			],
		},
	},
};
