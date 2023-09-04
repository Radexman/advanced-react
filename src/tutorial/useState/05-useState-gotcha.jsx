import { useState } from 'react';

const UseStateGotcha = () => {
	const [value, setValue] = useState(0);

	const handleClick = () => {
		setTimeout(() => {
			console.log('clicked the button');
			setValue((currentState) => {
				return currentState + 1;
			});
		}, 3000);
	};

	return (
		<div>
			<h1>{value}</h1>
			<button
				type='button'
				className='btn'
				onClick={handleClick}
			>
				Increment
			</button>
		</div>
	);
};

export default UseStateGotcha;
