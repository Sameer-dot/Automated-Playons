import React from 'react';

export const Slots = (slot) => {
    console.log(slot.start)
	return (
		<div className='col-3 border border-1 p-1 m-1'>
			<div className='row text-center'>
				<div className='col-4'>
					<input name='reservation' className='form-check-input' type='radio' />
				</div>
				<div className='col-8'>
					{slot.start} - {slot.end}
				</div>
			</div>
		</div>
	);
};
