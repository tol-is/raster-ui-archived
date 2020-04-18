import { jsx } from './pragma-tailwind';
import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { ThemeContext as EmotionContext } from '@emotion/core';

import themeDark from './presets/duotoneDark';

const RasterTheme = {
	type: [14, 16, 18, 20, 22, 24],
	rhythm: [1, 2, 3, 4, 6, 8, 10, 12, 16, 20],
};

const CodeBlockProvider = ({ code, language, children }) => {
	return (
		<EmotionContext.Provider value={RasterTheme}>
			<LiveProvider
				language={language}
				theme={themeDark}
				code={code}
				transformCode={code => `/** @jsx jsx */ ${code}`}
				scope={{ jsx }}
			>
				{children}
			</LiveProvider>
		</EmotionContext.Provider>
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
