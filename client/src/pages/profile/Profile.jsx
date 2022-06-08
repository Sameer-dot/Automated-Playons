import React from 'react';
import Navbar from './../../components/navbar/Navbar';
import Footer from './../../components/footer/Footer';
import { FaUser } from 'react-icons/fa';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';

function Profile() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { isLoading, isError, message } = useSelector((state) => state.goals);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		if (!user) {
			navigate('/login');
		}
	}, [user, navigate, isError, message, dispatch]);

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
									value={user.name}
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
									value={user.email}
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
									value={user.password}
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
