import { useState } from 'react';

const ToggleChallange = () => {
	const [isToggled, setIsToggled] = useState(false);

	const handleClick = () => {
		setIsToggled(!isToggled);
	};

	return (
		<div>
			<h1 style={{ margin: '2rem 0' }}>Toggle Challange</h1>
			{isToggled ? <ToggledEl /> : <NotToggled />}
			<button
				className='btn'
				type='button'
				onClick={handleClick}
			>
				Toggle
			</button>
		</div>
	);
};

const ToggledEl = () => {
	return <h2>Button Has Been Toggled</h2>;
};

const NotToggled = () => {
	return <h2>Button Was Not Toggled</h2>;
};

export default ToggleChallange;
