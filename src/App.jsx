import ProgressCard from './ProgressCard';

const data = {
	title: 'Programming',
	bgcolor: '#00695c',
	completed: 64,
};

function App() {
	return (
		<div className='container'>
			<ProgressCard data={data} />
		</div>
	);
}

export default App;
