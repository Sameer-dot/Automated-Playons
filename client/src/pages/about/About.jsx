import React from 'react';
import './About.css';
import aboutImg from '../../assets/about.png';
import playImg from '../../assets/play.png';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const About = () => {
	return (
		<div>
			<Navbar />
			<section className='features-head bg-prim py-3'>
				<div className='containers grid'>
					<div>
						<h1 className='xl'>Who are we?</h1>
						<p className='lead'>
							Check out the features of Aotomated Playons that separate us from
							the competition.
						</p>
					</div>
					<img src={playImg} alt='' />
				</div>
			</section>

			<section className='features-sub-head bg-light py-3'>
				<div className='container grid'>
					<div>
						<h1 className='md'>Features</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
							sed aliquid natus quibusdam pariatur, nulla officia impedit
							sapiente. Vel architecto consectetur alias perspiciatis quo
							tempore fugit sed eveniet officiis distinctio?
						</p>
					</div>
					<img src={aboutImg} alt='' />
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default About;
