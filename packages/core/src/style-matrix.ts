import { Style } from '@raster-system/types';

export const gridMatrix = ({ columns }: { columns: number }): Style => {
	return {
		display: 'grid',
		gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
		[`& > * `]: {
			gridColumn: 'span 1',
		},
	};
};

export const gridMatrixCell = ({
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

export const gridMatrixGap = ({ space }: { space: string }): Style => {
	return {
		gridRowGap: space,
		gridColumnGap: space,
	};
};

export const gridMatrixGapX = ({ space }: { space: string }): Style => {
	return {
		gridColumnGap: space,
	};
};

export const gridMatrixGapY = ({ space }: { space: string }): Style => {
	return {
		gridRowGap: space,
	};
};
