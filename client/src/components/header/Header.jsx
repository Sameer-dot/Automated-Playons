import './header.css';
import playImg from '../../assets/play.png';

const Header = ({ type }) => {
	return (
		<section className='showcase'>
			<div className='container grid'>
				<div className='showcase-text'>
					<h1>Automated Playons</h1>
					<p>
						We are the first automated playons company. We provide you the
						private arenas for all kinds of sports. Just book the slot
						and have fun with your friends.
					</p>
					<button className='btn btn-outline'>About US</button>
				</div>
				{/* <div className='showcaseForm '>
					<img src={playImg} alt='' />
				</div> */}
			</div>
		</section>
	);
};

export default Header;
