import React, { useState, useCallback } from 'react';

import { BaselineContext } from './BaselineContext';

export const BaselineProvider = ({ children }) => {
	const [showBaseline, setShowBaseline] = useState(true);

	const toggleBaseline = useCallback(() => {
		console.log(showBaseline);
		setShowBaseline(!showBaseline);
	}, [showBaseline]);

	return (
		<BaselineContext.Provider
			value={{
				showBaseline: showBaseline,
				toggleBaseline: toggleBaseline,
			}}
		>
			{children}
		</BaselineContext.Provider>
	);
};
export default BaselineProvider;
