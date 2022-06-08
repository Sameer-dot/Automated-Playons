const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
	{
		Name: {
			type: String,
			trim: true,
			required: [true, 'Please add name'],
		},
		Phone: {
			type: String,
			trim: true,
			required: [true, 'Please add some contact number'],
		},
		PlayOn: {
			type: String,
			trim: true,
			required: [true, 'Please add some playon name'],
		},
		Arena: {
			type: String,
			trim: true,
			required: [true, 'Please add some Arena Name'],
		},
		Address: {
			type: String,
			trim: true,
			required: [true, 'Please add some address'],
		},
		Price: {
			type: String,
			trim: true,
			required: [true, 'Please add Price'],
		},
		Time: {
			type: String,
			trim: true,
			required: [true, 'Please select time slot'],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Order', orderSchema);
