import { useState, useEffect } from 'react';

const MultipleReturns = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			// done fetching data
			setIsLoading(false);
		}, 3000);
	}, []);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	return <h2>Multiple Returns</h2>;
};

export default MultipleReturns;
