import { useState, useEffect } from 'react';

const UseEffectExample = () => {
	const [value, setValue] = useState(0);

	const sayHello = () => {
		console.log('Hello There');
		// be careful, you will have an infinite loop
	};

	sayHello();

	useEffect(() => {
		console.log('Hello from useEffect');
	}, []);

	return (
		<div>
			<h1>Value : {value}</h1>
			<button
				type='button'
				className='btn'
				onClick={() => setValue(value + 1)}
			>
				Click me
			</button>
		</div>
	);
};

export default UseEffectExample;
