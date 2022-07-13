import axios from 'axios';

const API_URL = 'http://localhost:5000/api/order/';
const H_URI = '/api/order/';

// Create new Order
const createGoal = async (goalData, token) => {
	console.log(goalData);
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.post(API_URL, goalData, config);
	console.log(response.data);
	return response.data;
};

const goalService = {
	createGoal,
};

export default goalService;
