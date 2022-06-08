import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { register, reset } from '../../features/auth/authSlice';
import Spinner from '../../components/spinner/Spinner';

import './Register.css';
import Navbar from './../../components/navbar/Navbar';
import Footer from './../../components/footer/Footer';

function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate('/');
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			toast.error('Passwords do not match');
		} else {
			const userData = {
				name,
				email,
				password,
			};

			dispatch(register(userData));
		}
	};

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
							<FaUser className='color' /> Register
						</h1>
						<p>Please create an account</p>
					</section>

					<section className='forms'>
						<form onSubmit={onSubmit}>
							<div className='forms-group'>
								<input
									type='text'
									className='forms-control'
									id='name'
									name='name'
									value={name}
									placeholder='Enter your name'
									onChange={onChange}
								/>
							</div>
							<div className='forms-group'>
								<input
									type='email'
									className='forms-control'
									id='email'
									name='email'
									value={email}
									placeholder='Enter your email'
									onChange={onChange}
								/>
							</div>
							<div className='forms-group'>
								<input
									type='password'
									className='forms-control'
									id='password'
									name='password'
									value={password}
									placeholder='Enter password'
									onChange={onChange}
								/>
							</div>
							<div className='forms-group'>
								<input
									type='password'
									className='forms-control'
									id='password2'
									name='password2'
									value={password2}
									placeholder='Confirm password'
									onChange={onChange}
								/>
							</div>
							<div className='forms-group'>
								<button type='submit' className='btns btns-block'>
									Submit
								</button>
							</div>
						</form>
					</section>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Register;
