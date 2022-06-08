import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Arena from './pages/arena/Arena';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import About from './pages/about/About';
import Profile from './pages/profile/Profile';
import Calendar from './pages/calendar/Calendar';
import Order from './pages/order/Order';
import { useState } from 'react';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/playonlist/:id' element={<List />} />
				<Route path='/arena/:id' element={<Arena />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/about' element={<About />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/calendar' element={<Calendar />} />
				<Route path='/order' element={<Order />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
