import ProgressBar from './ProgressBar';

const testData = [
	{ bgcolor: '#6a1b9a', completed: 45 },
	{ bgcolor: '#00695c', completed: 39 },
	{ bgcolor: '#ef6c00', completed: 51 },
];

const Navbar = () => {
	console.log(((45 / 100) * 100).toFixed(0));

	return (
		<div>
			<h1>Progress Bars</h1>
			{testData.map((item, index) => (
				<ProgressBar
					key={index}
					bgcolor={item.bgcolor}
					completed={item.completed}
				/>
			))}
		</div>
	);
};
export default Navbar;
