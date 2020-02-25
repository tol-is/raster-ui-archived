import React from 'react';

export const BaselineContext = React.createContext({
	showBaseline: true,
	toggleBaseline: () => null,
});

export default BaselineContext;
