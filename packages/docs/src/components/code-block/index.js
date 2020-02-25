import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import themeDark from './presets/duotoneDark';

const CodeBlockProvider = ({ code, language, children }) => {
	return (
		<LiveProvider
			language={language}
			theme={themeDark}
			code={code}
			transformCode={code =>
				'<div className="bg-baseline flex-1">' + code + '</div>'
			}
		>
			{children}
		</LiveProvider>
	);
};

export const CodeBlock = ({ children, className = 'language-js' }) => {
	const language = className.replace(/language-/, '');
	return (
		<div className="flex flex-col flex-1">
			<CodeBlockProvider code={children.trim()} language={language}>
				<LivePreview className="flex flex-1" />
				<LiveError className="absolute" />
				<LiveEditor className="h-18 flex-0" />
			</CodeBlockProvider>
		</div>
	);
};

export default CodeBlock;
