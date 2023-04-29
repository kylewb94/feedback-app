import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { HashRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
		</HashRouter>
	</React.StrictMode>,
)