import { useState, useEffect } from 'react';

const HookRules = () => {
	const [condition, setCondition] = useState(true);

	if (condition) {
		return <h2>Hello There</h2>;
	}

	// This will also fail
	useEffect(() => {
		console.log('hello there');
	}, []);

	return <h2>Hook Rules</h2>;
};

export default HookRules;
