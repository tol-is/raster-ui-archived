export type ObjectOrArray<T, K extends keyof any = keyof any> = T[] | Record<K, T | Record<K, T> | T[]>;

export type NumberScale = Array<number>;

export type FontOpenType = {
	key: string;
	familyName: string;
	fallback: string;
	upm: number;
	xHeight: number;
	capHeight: number;
	ascent: number;
	descent: number;
	weight: number;
	italic: boolean;
};

export type FontVariable = {
	key: string;
	familyName: string;
	fallback: string;
	upm: number;
	xHeight: number;
	capHeight: number;
	ascent: number;
	descent: number;
	axis: any; // TODO
};

export type FontsScale = Array<FontOpenType | FontVariable>;

export interface ITheme {
	root: number;
	baseline: number;
	type: NumberScale;
	measure: NumberScale;
	rhythm: NumberScale;
	leading: NumberScale;
	fonts: FontsScale;
}

declare const Theme: ITheme;
