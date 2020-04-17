import { Style } from '@raster-ui/types';





export const gridRaster = ({ columns }: { columns: number }): Style => {
	return {
		display: 'grid',
		gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
		[`& > * `]: {
			gridColumn: 'span 1',
		},
	};
};

export const gridCell = ({
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

export const gridGap = ({ space }: { space: string }): Style => {
	return {
		gridRowGap: space,
		gridColumnGap: space,
	};
};

export const gridGapX = ({ space }: { space: string }): Style => {
	return {
		gridColumnGap: space,
	};
};

export const gridGapY = ({ space }: { space: string }): Style => {
	return {
		gridRowGap: space,
	};
};
