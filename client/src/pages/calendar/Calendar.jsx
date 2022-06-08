import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Navbar from './../../components/navbar/Navbar';
import Footer from './../../components/footer/Footer';
import { NavLink } from 'react-router-dom';

const Calendar = () => {
	const events = [
		{
			title: '09:00-11:00',
			start: '2022-05-16 09:00:00',
			end: '2022-05-16 11:00:00',
		},
		{
			title: '11:00-19:00',
			start: '2022-05-18 11:00:00',
			end: '2022-05-18 19:00:00',
		},
		{
			title: '19:00-21:00',
			start: '2022-05-19 19:00:00',
			end: '2022-05-19 21:00:00',
		},
		{
			title: '12:00-14:00',
			start: '2022-05-19 12:00:00',
			end: '2022-05-19 14:00:00',
		},
	];
	function dateChange(event) {
		// print(event)
		// event.jsEvent.preventDefault()
		// event = event.event
		// print(event)
		// const title = event._def.title
		// const { start, end } = event._instance.range
		// print({ title, start, end })
	}
	function getTimeSlots(
		start = new Date('2022-05-18T09:30'),
		end = new Date('2022-05-18T22:30'),
		occ = [
			{
				start: new Date('2022-05-18T09:30'),
				end: new Date('2022-05-18T11:30'),
			},
			{
				start: new Date('2022-05-18T14:30'),
				end: new Date('2022-05-18T16:30'),
			},
		],
		interval = 2
	) {
		const res = [];
		print({ start, end, occ, interval });

		start = new Date(start);
		end = new Date(end);

		function isInBreak(start, end, occ) {
			return occ.some((br) => {
				let A = new Date(br.start);
				let B = new Date(br.end);
				let C = start;
				let D = end;
				return A < D && C < B && A < B && C < D;
			});
		}
		let options = {
			hour: 'numeric',
			minute: 'numeric',
			hour12: false,
		};
		while (start <= end) {
			let tempEnd = new Date(deepCopy(start));
			tempEnd.setHours(start.getHours() + interval);

			if (!isInBreak(start, tempEnd, occ) && tempEnd <= end) {
				res.push({
					start: start.toLocaleTimeString('en-US', options),
					end: tempEnd.toLocaleTimeString('en-US', options),
				});
			}
			start.setMinutes(start.getMinutes() + 60);
		}
		for (let i of res) {
			print(i);
		}
		console.log('From');
		console.log(res);
		return res;
	}

	function dayClicked(d) {
		const date = d.date;
		print(date);

		let start = new Date(deepCopy(date));
		start.setHours(12);
		start.setMinutes(0);

		let end = new Date(deepCopy(date));
		end.setHours(22);
		end.setMinutes(30);

		print({ start });
		print({ end });
		const timeSlots = getTimeSlots(deepCopy(start), deepCopy(end), events, 2);

		const divReservations = document.querySelector('#reservations');
		divReservations.textContent = '';

		timeSlots.map(
			(slot) =>
				(divReservations.innerHTML += `<div className="col-3 border border-1 p-1 m-1">
		            <div className="row text-center">
		                <div className="col-4">
		                    <input name="reservation" className="form-check-input" type="radio">
		                </div>
		                <div className="col-8">
		                    ${slot.start} - ${slot.end}
		                </div>
		            </div>
		        </div>`)
		);
	}

	const print = console.log;
	const deepCopy = (el) => JSON.parse(JSON.stringify(el));

	return (
		<div>
			<Navbar />
			<div className='container mt-5 mb-5'>
				<div className='row justify-content-center'>
					<div className='col-12'>
						<FullCalendar
							plugins={[dayGridPlugin, interactionPlugin]}
							displayEventEnd={true}
							longPressDelay={1}
							selectable={true}
							height={700}
							displayEventTime={false}
							event={dateChange}
							dateClick={dayClicked}
							defaultView='month'
							timeFormat='HH:mm'
							firstDay={1}
							header={{
								right: 'prev,next today',
								left: 'title',
							}}
							events={events}
						/>
					</div>
					<div className='col-12'>
						<div className='row m-1'>
							<p>Available Reservation(s) are as follows:</p>
						</div>
						<div className='row m-1' id='reservations'></div>
					</div>
					<NavLink to='/order'>
						<button type='button' className='btn btn-primary col-6'>
							Proceed
						</button>
					</NavLink>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Calendar;
