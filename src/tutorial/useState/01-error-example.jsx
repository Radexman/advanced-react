const ErrorExample = () => {
	let count = 0;

	const increaseCount = () => {
		count++;
		console.log(count);
	};

	return (
		<div>
			<h2>{count}</h2>
			<button type='button' className='btn' onClick={increaseCount}>
				Increment
			</button>
		</div>
	);
};
export default ErrorExample;
