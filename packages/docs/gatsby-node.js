const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'Mdx') {
		const value = createFilePath({ node, getNode });
		createNodeField({
			node,
			name: 'slug',
			value: value,
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const postTemplate = path.resolve('./src/templates/template-recipe.js');

	const allDocs = await graphql(
		`
			{
				allMdx(limit: 1000) {
					edges {
						node {
							fields {
								slug
							}
						}
					}
				}
			}
		`
	);

	if (allDocs.errors) {
		console.error(`Error in allDocs: ${allDocs.errors}`);
		throw Error(`Error in allDocs: ${allDocs.errors}`);
	}

	// Dynamically create a page for each markdown file with layout: post
	allDocs.data.allMdx.edges.forEach((post, index) => {
		const { slug, type } = post.node.fields;

		console.log(slug);
		createPage({
			path: `recipes${slug}`,
			component: postTemplate,
			context: {
				slug,
			},
		});
	});
};
