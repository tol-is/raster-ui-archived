import * as CSS from 'csstype';

interface Style extends CSS.Properties {
	[key: string]: any;
}
export const columns = ({ count }: { count: Number }): Style => {
	return {
		display: 'grid',
		gridTemplateColumns: `repeat(${count}, minmax(0,1fr))`,
		[`& > * `]: {
			gridColumn: 'span 1',
		},
	};
};

export const column = ({ start, span }: { start: Number; span: Number }): Style => {
	return {
		gridColumn: `${start} / span ${span}`,
	};
};

export const gap = ({ space }: { space: string }): Style => {
	return {
		gridRowGap: space,
		gridColumnGap: space,
	};
};

export const gapX = ({ space }: { space: string }): Style => {
	return {
		gridColumnGap: space,
	};
};

export const gapY = ({ space }: { space: string }): Style => {
	return {
		gridRowGap: space,
	};
};
