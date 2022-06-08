import './navbar.css';
import { useState } from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate('/');
	};

	return (
		<div>
			<nav className='snavbar' onClick={(e) => e.stopPropagation()}>
				<div className='snav-container'>
					<NavLink exact to='/' className='snav-logo'>
						Automated PlayOn
					</NavLink>
					<ul className={click ? 'snav-menu active' : 'snav-menu'}>
						<li className='snav-item'>
							<NavLink
								to='/'
								activeClassName='sactive'
								className='snav-links'
								onClick={click ? handleClick : null}
							>
								Home
							</NavLink>
						</li>
						<li className='snav-item'>
							<NavLink
								to='/about'
								activeClassName='sactive'
								className='snav-links'
								onClick={click ? handleClick : null}
							>
								About
							</NavLink>
						</li>
						<li className='snav-item'>
							<NavLink
								to='/profile'
								activeClassName='sactive'
								className='snav-links'
								onClick={click ? handleClick : null}
							>
								Profile
							</NavLink>
						</li>
					</ul>
				</div>
				<div className='header'>
					<ul>
						{user ? (
							<li>
								<button className='btnss' onClick={onLogout}>
									<FaSignOutAlt /> Logout
								</button>
							</li>
						) : (
							<>
								<li className='lls'>
									<Link to='/login'>
										<FaSignInAlt /> Login
									</Link>
								</li>
								<li className='lls'>
									<Link to='/register'>
										<FaUser /> Register
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
