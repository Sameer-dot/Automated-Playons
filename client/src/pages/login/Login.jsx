// import { useState } from 'react';
// import './Login.css';
// //import FormInput from '../../components/formInput/FormInput';
// import Navbar from './../../components/navbar/Navbar';

// const Login = () => {
// 	const [values, setValues] = useState({
// 		username: '',
// 		password: '',
// 	});

// 	const inputs = [
// 		{
// 			id: 1,
// 			name: 'username',
// 			type: 'text',
// 			placeholder: 'Username',
// 			errorMessage:
// 				"Username should be 3-16 characters and shouldn't include any special character!",
// 			label: 'Username',
// 			pattern: '^[A-Za-z0-9]{3,16}$',
// 			required: true,
// 		},
// 		{
// 			id: 2,
// 			name: 'password',
// 			type: 'password',
// 			placeholder: 'Password',
// 			errorMessage:
// 				'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
// 			label: 'Password',
// 			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
// 			required: true,
// 		},
// 	];

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 	};

// 	const onChange = (e) => {
// 		setValues({ ...values, [e.target.name]: e.target.value });
// 	};

// 	return (
// 		<div>
// 			<Navbar />
// 			<div className='app'>
// 				<form onSubmit={handleSubmit}>
// 					<h1 className='title'>Login</h1>
// 					{inputs.map((input) => (
// 						<FormInput
// 							key={input.id}
// 							{...input}
// 							value={values[input.name]}
// 							onChange={onChange}
// 						/>
// 					))}
// 					<button className='regBtn'>Submit</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;

import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../../features/auth/authSlice';
import Spinner from '../../components/spinner/Spinner';
import Navbar from './../../components/navbar/Navbar';
import Footer from './../../components/footer/Footer';

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

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

		const userData = {
			email,
			password,
		};

		dispatch(login(userData));
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<Navbar />
			<div className='app'>
				<div className='containers'>
					<section className='headings'>
						<h1 className='register'>
							<FaSignInAlt className='color' /> Login
						</h1>
						<p>Login and start setting goals</p>
					</section>

					<section className='forms'>
						<form onSubmit={onSubmit}>
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
								<button type='submit' className='btns btns-block'>
									Submit
								</button>
							</div>
						</form>
					</section>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Login;
