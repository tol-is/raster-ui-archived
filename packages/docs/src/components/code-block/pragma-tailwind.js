import { jsx as emotionJsx, css as emotionCss } from '@emotion/core';

const getClassNames = className => {
	return theme => {
		const out = className.split(' ').map(c => {
			console.log(c);
			// const queries = c.split('|');
			// const [prop, value = 'initial'] = queries.pop().split(':');
		});

		return out;
	};
};

/**
 *
 */
const getCss = ({ className }) => {
	if (!className) return;
	return theme => {
		const rhythmStyles = getClassNames(className)(theme);
		const out = [...rhythmStyles];
		return out;
	};
};

/**
 *
 */
const parseProps = props => {
	if (!props) return null;
	const next = {};

	for (let key in props) {
		if (key === 'className') continue;
		next[key] = props[key];
	}
	const css = getCss(props);
	if (css) next.css = css;
	return next;
};

/**
 * jsx
 */
export const jsx = (type, props, ...children) => {
	return emotionJsx.apply(undefined, [type, parseProps(props), ...children]);
};

export default jsx;
