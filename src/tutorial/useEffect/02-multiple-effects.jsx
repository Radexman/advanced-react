import { useState, useEffect } from 'react';

const MultipleEffects = () => {
	const [value, setValue] = useState(0);
	const [secondValue, setSecondValue] = useState(0);

	useEffect(() => {
		console.log('Hello from first useEffect');
	}, [value]);

	useEffect(() => {
		console.log('Hello from second useEffect');
	}, [secondValue]);

	return (
		<div>
			<h2>value : {value}</h2>
			<button
				type='button'
				className='btn'
				onClick={() => setValue(value + 1)}
			>
				value
			</button>
			<h2>second value : {secondValue}</h2>
			<button
				type='button'
				className='btn'
				onClick={() => setSecondValue(secondValue + 1)}
			>
				second value
			</button>
		</div>
	);
};

export default MultipleEffects;
