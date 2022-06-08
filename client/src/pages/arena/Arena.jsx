import './Arena.css';
import Navbar from '../../components/navbar/Navbar';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import stadiumImg from '../../assets/stadium.jpg';

const Arena = () => {
	const photos =
	'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1';

	return (
		<div>
			<Navbar />
			<div className='hotelContainer'>
				<div className='hotelWrapper'>
					<NavLink to='/calendar'>
						<button className='bookNow'>Reserve or Book Now!</button>
					</NavLink>
					<h1 className='hotelTitle'>MT Playons</h1>
					<div className='hotelAddress'>
						<FontAwesomeIcon icon={faLocationDot} />
						<span>Modal Town Block-B St 25 Lahore</span>
					</div>
					<span className='hotelDistance'>
						Excellent Quality | Clean Pitches Arenas
					</span>
					<span className='hotelPriceHighlight'>
						Book your slots. 2 hour will cost 1k.
					</span>
					<div className='hotelImages'>
						<div className='hotelImgWrapper'>
							<img src={stadiumImg} alt='' className='hotelImg' />
						</div>
					</div>
					<div className='hotelDetails'>
						<div className='hotelDetailsTexts'>
							<h1 className='hotelTitle'>Play in the modern playon</h1>
							<p className='hotelDesc'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
								deserunt commodi voluptatem neque accusamus totam nulla vel ab,
								fugiat harum corrupti omnis inventore explicabo laudantium,
								asperiores hic, aliquid tempora sint.
							</p>
						</div>
					</div>
				</div>
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Arena;
