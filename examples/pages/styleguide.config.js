const path = require('path');

const dir = path.resolve(__dirname, 'lib');

module.exports = {
	title: 'v1.0',
	pages: [
		{
			id: 'readme',
			name: 'Readme File',
			sections: [
				{
					name: 'Read me',
					content: 'docs/One.md',
				},
			],
		},
		{
			id: 'styleguide',
			name: 'Styleguide',
			sections: [
				{
					name: 'Components',
					components: './lib/components/**/[A-Z]*.js',
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
					loader: 'babel',
				},
				{
					test: /\.css$/,
					include: dir,
					loader: 'style!css?modules&importLoaders=1',
				},
				{
					test: /\.json$/,
					include: path.dirname(require.resolve('dog-names/package.json')),
					loader: 'json',
				},
			],
		},
	},
};
