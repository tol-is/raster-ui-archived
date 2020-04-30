module.exports = {
	siteMetadata: {
		title: `Raster System Docs`,
		description: ``,
		author: `@a7sc11u`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-catch-links`,
			options: {
				excludePattern: /(excluded-link|external)/,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `media`,
				path: `${__dirname}/src/media`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/src/pages/`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'docs',
				path: `${__dirname}/src/docs/`,
			},
		},
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: ['.md', '.mdx'],
				remarkPlugins: [],
			},
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: 'hsl(208, 98%, 50%)',
				showSpinner: false,
			},
		},
		{
			resolve: `gatsby-plugin-postcss`,
		},
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				printRejected: true,
				tailwind: true,
				develop: false,
				whitelist: ['whitelist'],
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.vector\.svg$/,
				},
			},
		},
		'gatsby-transformer-json',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `raster-ui,`,
				short_name: `raster`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#fff`,
				display: `minimal-ui`,
			},
		},
	],
};
