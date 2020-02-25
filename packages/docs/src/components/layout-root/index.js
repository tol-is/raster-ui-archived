import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { BaselineProvider } from '../../context/BaselineProvider';

export const LayoutRoot = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<BaselineProvider>
			<main>{children}</main>
		</BaselineProvider>
	);
};

export default LayoutRoot;
