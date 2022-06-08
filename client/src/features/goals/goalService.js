import axios from 'axios';

const API_URL = 'http://localhost:5000/';
const H_URI = 'https://automatedplayonsapp.herokuapp.com/';

// Create new Order
const createGoal = async (goalData, token) => {
	console.log(goalData);
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.post(H_URI + 'api/order/', goalData, config);
	console.log(response.data);
	return response.data;
};

const goalService = {
	createGoal,
};

export default goalService;
