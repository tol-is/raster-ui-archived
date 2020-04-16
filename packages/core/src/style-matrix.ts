import { Style } from '@styled-rhythm/types';

export const matrix = ({ columns }: { columns: number }): Style => {
	return {
		display: 'grid',
		gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
		[`& > * `]: {
			gridColumn: 'span 1',
		},
	};
};

export const cell = ({
	start,
	span = 1,
}: {
	start?: number;
	span: number;
}): Style => {
	return start
		? {
				gridColumn: `${start} / span ${span}`,
		  }
		: {
				gridColumn: `span ${span}`,
		  };
};

export const matrixGap = ({ space }: { space: string }): Style => {
	return {
		gridRowGap: space,
		gridColumnGap: space,
	};
};

export const matrixGapX = ({ space }: { space: string }): Style => {
	return {
		gridColumnGap: space,
	};
};

export const matrixGapY = ({ space }: { space: string }): Style => {
	return {
		gridRowGap: space,
	};
};
