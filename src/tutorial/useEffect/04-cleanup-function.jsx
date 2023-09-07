import { useState, useEffect } from 'react';

const CleanupFunction = () => {
	const [isToggled, setIsToggled] = useState(false);

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
		console.log('Second Component Loaded');
	}, []);

	return <h2>Second Component</h2>;
};

export default CleanupFunction;
