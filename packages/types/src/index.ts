export type ObjectOrArray<T, K extends keyof any = keyof any> = T[] | Record<K, T | Record<K, T> | T[]>;

export type Scale = Array<number>;

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
	type: Scale;
	measure: Scale;
	rhythm: Scale;
	leading: Scale;
	fonts: FontsScale;
}

declare const theme: ITheme;

export default theme;
