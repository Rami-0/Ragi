import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import AdminPage from './pages/adminPage/AdminPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/admin' element={<AdminPage />} />
				<Route path='/2024' element={<PortfolioPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
