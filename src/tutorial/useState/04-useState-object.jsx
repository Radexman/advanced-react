import { useState } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'peter',
		age: 24,
		hobby: 'read books',
	});

	const displayPerson = () => {
		// setPerson({
		// 	name: 'john',
		// 	age: 28,
		// 	hobby: 'scream at the computer',
		// });

		setPerson({ ...person, name: 'susan' });
	};

	const { name, age, hobby } = person;

	return (
		<>
			<h3>{name}</h3>
			<h3>{age}</h3>
			<h4>Enjoys to {hobby}</h4>
			<button
				className='btn'
				onClick={displayPerson}
			>
				Show John
			</button>
		</>
	);
};

export default UseStateObject;
