import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import './home.css';

import stadiumImg from '../../assets/stadium.jpg';
import stadiumImg1 from '../../assets/stadium1.jpg';
import stadiumImg2 from '../../assets/stadium2.jpg';
import stadiumImg3 from '../../assets/stadium3.jpg';

const Home = () => {
	const playons = [
		{
			id: 1,
			imgUrl: stadiumImg,
				//'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
			Name: 'MT PlayOns',
			Location: 'Modal Town',
			Time: 'Opened 24/7',
		},
		{
			id: 2,
			imgUrl: stadiumImg1,
				//'https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1',
			Name: 'JT PlayOns',
			Location: 'Johar Town',
			Time: 'Opened 24/7',
		},
		{
			id: 3,
			imgUrl: stadiumImg2,
				//'https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1',
			Name: 'Burger PlayOns',
			Location: 'DHA',
			Time: 'Opened 24/7',
		},
		{
			id: 4,
			imgUrl: stadiumImg3,
				//'https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1',
			Name: 'CT PlayOns',
			Location: 'Cantt',
			Time: 'Opened 24/7',
		},
    {
			id: 5,
			imgUrl: stadiumImg3,
				//'https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1',
			Name: 'CT PlayOns',
			Location: 'Cantt',
			Time: 'Opened 24/7',
		},
    {
			id: 6,
			imgUrl: stadiumImg1,
				//'https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1',
			Name: 'CT PlayOns',
			Location: 'Cantt',
			Time: 'Opened 24/7',
		},
    {
			id: 7,
			imgUrl: stadiumImg,
				//'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
			Name: 'MT PlayOns',
			Location: 'Modal Town',
			Time: 'Opened 24/7',
		},
		{
			id: 8,
			imgUrl: stadiumImg2,
				//'https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1',
			Name: 'JT PlayOns',
			Location: 'Johar Town',
			Time: 'Opened 24/7',
		},
	];
	return (
		<div>
			<Navbar />
			<Header />
			<div className='homeContainer'>
				<h1 className='homeTitle'>PlayOn's in Lahore</h1>
				<div className='fp'>
					{playons.map((playon) => (
						<FeaturedProperties
							key={playon.id}
							id={playon.id}
							imgUrl={playon.imgUrl}
							name={playon.Name}
							loc={playon.Location}
							time={playon.Time}
						/>
					))}
				</div>
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
