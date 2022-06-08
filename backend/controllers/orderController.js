const asyncHandler = require('express-async-handler');

const Order = require('../models/orderModel');

const setOrder = asyncHandler(async (req, res) => {
	const { Name, Phone, PlayOn, Arena, Address, Price, Time } = req.body;


	if (!Name || !Phone || !PlayOn || !Arena || !Address || !Price || !Time) {
		res.status(400);
		throw new Error('Please add all fields');
	}

	// Create order
	const order = await Order.create({
		Name,
		Phone,
		PlayOn,
		Arena,
		Address,
		Price,
		Time,
	});

	if (order) {
		res.status(201).json({
			_id: order.id,
			Name: order.Name,
			Phone: order.Phone,
			PlayOn: order.PlayOn,
			Arena: order.Arena,
			Address: order.Address,
			Price: order.Price,
			Time: order.Time,
		});
	} else {
		res.status(400);
		throw new Error('Invalid Order data');
	}
});

module.exports = {
	setOrder,
};
