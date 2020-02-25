import React from 'react';

import MDXProvider from '../mdx-provider';

export const Root = ({ children }) => {
	return (
		<>
			<MDXProvider>{children}</MDXProvider>
		</>
	);
};

export default Root;
