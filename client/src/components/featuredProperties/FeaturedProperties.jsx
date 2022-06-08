import './featuredProperties.css';
import { NavLink } from 'react-router-dom';

const FeaturedProperties = (props) => {
	const { id, imgUrl, name, loc, time } = props;
	console.log(id);
	return (
		<div className='fpItem'>
			<img src={imgUrl} alt='' className='fpImg' />
			<span className='fpName'>{name}</span>
			<span className='fpCity'>{loc}</span>
			<span className='fpPrice'>{time}</span>
			<div className='fpMore'>
				<NavLink to={`/playonlist/${id}`}>
					<button>VIEW MORE</button>
				</NavLink>
			</div>
		</div>
	);
};

export default FeaturedProperties;
