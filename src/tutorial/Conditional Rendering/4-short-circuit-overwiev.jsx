import { useState } from 'react';

const ShortCircuit = () => {
	// falsy
	const [text, setText] = useState('');
	// truthy
	const [name, setName] = useState('Susan');

	return (
		<div>
			<h1>Falsy OR: {text || 'hello world'}</h1>
			<h1>Falsy AND: {text && 'hello world'}</h1>
			<h1>Truthy OR: {name || 'hello world'}</h1>
			<h1>Truthy AND: {name && 'hello world'}</h1>
		</div>
	);
};

export default ShortCircuit;
