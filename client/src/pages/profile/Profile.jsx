import { useEffect } from 'react';
import Navbar from './../../components/navbar/Navbar';
import Footer from './../../components/footer/Footer';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';
import { reset } from '../../features/goals/goalSlice';

function Profile() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { isLoading } = useSelector((state) => state.goals);

	let Name = '';
	let Email = '';
	let Password = '';

	// if (!user) {
	// 	Name = 'name';
	// 	Email = 'email@gmail.com';
	// 	Password = 'password';
	// } else {
	// 	Name = user.name;
	// 	Email = user.email;
	// 	Password = user.password;
	// }

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}

	}, [user, navigate, dispatch]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div>
			<Navbar />
			<div className='app'>
				<div className='containers'>
					<section className='headings'>
						<h1 className='register'>
							<FaUser className='color' />
						</h1>
						<p>User Profile</p>
					</section>

					<section className='forms'>
						<form>
							<div className='forms-group'>
								<input
									type='text'
									className='forms-control'
									id='name'
									name='name'
									value={Name}
									placeholder='Name'
									disabled
								/>
							</div>
							<div className='forms-group'>
								<input
									type='email'
									className='forms-control'
									id='email'
									name='email'
									value={Email}
									placeholder='Email'
									disabled
								/>
							</div>
							<div className='forms-group'>
								<input
									type='password'
									className='forms-control'
									id='password'
									name='password'
									value={Password}
									placeholder='Password'
									disabled
								/>
							</div>
						</form>
					</section>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Profile;
