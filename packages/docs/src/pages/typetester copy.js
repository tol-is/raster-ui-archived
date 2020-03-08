import React from 'react';

import { CodeBlock } from '../components/code-block';

const code = `
  <h1 className="sans-700i type-12/2">asdasda</h1>
`;

export default () => {
	return (
		<CodeBlock fullScreen live className="language-js">
			{code}
		</CodeBlock>
	);
};
