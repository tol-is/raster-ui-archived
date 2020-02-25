import React from 'react';
import RootElement from './components/root-element';

export const wrapRootElement = ({ element }) => {
	return <RootElement>{element}</RootElement>;
};
