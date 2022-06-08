import './searchItem.css';
import { NavLink } from 'react-router-dom';

const SearchItem = ({ id,item }) => {
	return (
		<div className='searchItem'>
			<img src={item.imgUrl} alt='' className='siImg' />
			<div className='siDesc'>
				<h1 className='siTitle'>{item.title}</h1>
				<span className='siDistance'>{item.range}</span>
				<span className='siTaxiOp'>Good Lighting</span>
				<span className='siSubtitle'>{item.subtitle}</span>
				<span className='siCancelOp'>{item.cancellation} </span>
				<span className='siCancelOpSubtitle'>{item.location}</span>
			</div>
			<div className='siDetails'>
				<div className='siRating'>
					<span>Excellent Quality</span>
				</div>
				<div className='siDetailTexts'>
					<span className='siPrice'>{item.price}</span>
					<span className='siTaxOp'>Includes taxes and fees</span>
					<NavLink to={`/arena/${id}`}>
						<button className='siCheckButton'>See availability</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
