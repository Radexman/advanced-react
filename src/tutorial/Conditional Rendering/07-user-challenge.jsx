import { useState } from 'react';

const UserChallenge = () => {
	const [user, setUser] = useState(null);

	const login = () => {
		// normally connect to db or api
		setUser({ name: 'emilia' });
	};

	const logout = () => {
		setUser(null);
	};

	return (
		<div>
			{user ? (
				<div>
					<h4>Hello there, {user.name}</h4>
					<button
						type='button'
						className='btn'
						onClick={logout}
					>
						logout
					</button>
				</div>
			) : (
				<div>
					<h4>Please login</h4>
					<button
						type='button'
						className='btn'
						onClick={login}
					>
						login
					</button>
				</div>
			)}
		</div>
	);
};

export default UserChallenge;
