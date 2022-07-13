import Navbar from './../../components/navbar/Navbar';
import Footer from './../../components/footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';
import { createGoal, reset } from '../../features/goals/goalSlice';
import './Order.css';

const Order = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [Booking, SetBooking] = useState({
		Name: 'Sameer',
		Phone: '-',
		PlayOn: 'Modal Town',
		Arena: 'MT Playons',
		Address: 'Modal Town Block-B Street-22',
		Price: '2k',
		Time: '9th June 2022 12:00 - 14:00',
	});

	const { Name, Phone, PlayOn, Arena, Address, Price, Time } = Booking;

	const { user } = useSelector((state) => state.auth);
	const { isLoading, isError, message } = useSelector((state) => state.goals);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		if (!user) {
			navigate('/login');
		}

		dispatch(reset());
	}, [user, navigate, isError, message, dispatch]);

	const onChange = (e) => {
		SetBooking((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(createGoal(Booking));
		SetBooking(Booking);
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div>
			<Navbar />
			<div className='apps'>
				<div className='containers'>
					<section className='headings'>
						<h1 className='register color'>Order Details</h1>
						<p>Place the Order</p>
					</section>

					<section className='forms'>
						<form onSubmit={onSubmit}>
							<div className='forms-group'>
								<input
									type='text'
									className='forms-control'
									id='Name'
									name='Name'
									value={Name}
									placeholder='Name'
									onChange={onChange}
								/>
							</div>
							<div className='forms-group'>
								<input
									type='text'
									className='forms-control'
									id='Phone'
									name='Phone'
									value={Phone}
									placeholder='Phone'
									onChange={onChange}
								/>
							</div>
							<div className='forms-group'>
								<input
									type='text'
									className='forms-control'
									id='PlayOn'
									name='PlayOn'
									value={PlayOn}
									placeholder='PlayOn'
									onChange={onChange}
								/>
							</div>
							<div className='forms-group'>
								<input
									type='text'
									className='forms-control'
									id='Arena'
									name='Arena'
									value={Arena}
									placeholder='Arena'
									onChange={onChange}
								/>
							</div>
							<div className='forms-group'>
								<input
									type='text'
									className='forms-control'
									id='Address'
									name='Address'
									value={Address}
									placeholder='Address'
									onChange={onChange}
								/>
							</div>
							<div className='forms-group'>
								<input
									type='text'
									className='forms-control'
									id='Price'
									name='Price'
									value={Price}
									placeholder='Price'
									onChange={onChange}
								/>
							</div>
							<div className='forms-group'>
								<input
									type='text'
									className='forms-control'
									id='Time'
									name='Time'
									value={Time}
									placeholder='Time'
									onChange={onChange}
								/>
							</div>
							<div className='forms-group'>
								<button type='submit' className='btnd btnd-block'>
									Place Order
								</button>
							</div>
						</form>
					</section>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Order;
