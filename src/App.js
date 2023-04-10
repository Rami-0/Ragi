import "./App.css";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AdminPage from "./pages/adminPage/AdminPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import { Link } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";


function App() {	
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/admin" element={<AdminPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>

		</div>
	);
}

export default App;
