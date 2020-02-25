import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const components = {
	wrapper: props => <div style={{ maxWidth: '180ch' }} {...props} />,
};

export const MDX = ({ children }) => {
	return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDX;
