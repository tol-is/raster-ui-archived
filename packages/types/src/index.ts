import * as CSS from 'csstype';

export type ObjectOrArray<T, K extends keyof any = keyof any> = T[] | Record<K, T | Record<K, T> | T[]>;

export type NumberScale = Array<number>;

export type Font = FontOpenType | FontVariable;

export interface FontOpenType {
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
}

export interface FontVariable {
	key: string;
	familyName: string;
	fallback: string;
	upm: number;
	xHeight: number;
	capHeight: number;
	ascent: number;
	descent: number;
	axis: any; // TODO
}

export type FontsScale = Array<FontOpenType | FontVariable>;

export interface ThemeConfig {
	root: number;
	baseline: number;
	type: NumberScale;
	measure: NumberScale;
	rhythm: NumberScale;
	leading: NumberScale;
	fonts: FontsScale;
}

export interface Theme {
	root: number;
	baseline: number;
	type: NumberScale;
	measure: NumberScale;
	rhythm: ObjectOrArray<number | string>;
	leading: NumberScale;
	fonts: FontsScale;
}

export interface Style extends CSS.Properties {
	[key: string]: any;
}
