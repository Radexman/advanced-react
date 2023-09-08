const ProgressCard = ({ data }) => {
	const cardStyles = {
		width: '80%',
		borderRadius: '6px',
		padding: '10px',
		backgroundColor: 'gray',
	};

	const fillerStyles = {
		height: '100%',
		width: `${data.completed}%`,
		backgroundColor: `${data.bgcolor}`,
		borderRadius: 'inherit',
		textAlign: 'right',
	};

	const labelStyles = {
		padding: 5,
		color: 'white',
		fontWeight: 'bold',
	};

	const checkLevel = (points) => {};

	return (
		<div style={cardStyles}>
			<p>{data.title}</p>
			<div style={fillerStyles}>
				<span style={labelStyles}>{`${data.completed}%`}</span>
			</div>
		</div>
	);
};
export default ProgressCard;
