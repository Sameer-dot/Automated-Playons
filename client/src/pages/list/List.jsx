import './list.css';
import Navbar from '../../components/navbar/Navbar';
import SearchItem from './../../components/searchItem/SearchItem';

import stadiumImg from '../../assets/stadium.jpg';
import stadiumImg1 from '../../assets/stadium1.jpg';
import stadiumImg2 from '../../assets/stadium2.jpg';
import stadiumImg3 from '../../assets/stadium3.jpg';

const List = () => {
	const arenas = [
		{
			id: 1,
			imgUrl: stadiumImg,
			//'https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1',
			title: 'Indoor Cricket Arena',
			range: '500m wide space',
			subtitle: 'Open for everyone, Age should be more than 12',
			cancellation: 'Free cancellation in 6hrs',
			location: 'Located in Lahore - DHA',
			price: '1k/hour',
		},
		{
			id: 2,
			imgUrl: stadiumImg2,
			//'https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1',
			title: 'Indoor Footsall Arena',
			range: '800m wide space',
			subtitle: 'Open for everyone, Age should be more than 15',
			cancellation: 'Free cancellation in 3hrs',
			location: 'Located in Lahore - DHA',
			price: '2k/hour',
		},
	];
	return (
		<div>
			<Navbar />
			<div className='listContainer'>
				<div className='listWrapper'>
					<div className='listResult'>
						{arenas.map((arena) => (
							<SearchItem key={arena.id} id={arena.id} item={arena} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
