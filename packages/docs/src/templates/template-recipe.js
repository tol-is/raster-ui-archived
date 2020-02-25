import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const RecipeTemplate = ({ data: { mdx } }) => {
  return (
    <React.Fragment>
      <main>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </main>
    </React.Fragment>
  );
};

export default RecipeTemplate;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`;
