import { useState, useEffect } from 'react';

const CleanupFunction = () => {
	const [isToggled, setIsToggled] = useState(false);
	console.log('render');

	const handleToggle = () => {
		setIsToggled(!isToggled);
	};

	return (
		<div>
			{isToggled && <SecondComponent />}
			<button
				type='button'
				className='btn'
				onClick={handleToggle}
			>
				{isToggled ? 'toggled' : 'not toggled'}
			</button>
		</div>
	);
};

const SecondComponent = () => {
	useEffect(() => {
		const someFunc = () => {
			// some logic
		};
		window.addEventListener('scroll', someFunc);
		return () => window.removeEventListener('scroll', someFunc);
	}, []);

	return <h2>Second Component</h2>;
};

export default CleanupFunction;
