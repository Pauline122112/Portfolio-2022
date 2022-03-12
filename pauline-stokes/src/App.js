import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import SignUp from './components/pages/SignUp';


function App() {
  return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/about" exact element={<About />} />
					<Route path="/sign-up" exact element={<SignUp />} />
					<Route path="/work" exact element={<Work />} />
				</Routes>
			</Router>
		</>
	);
}

export default App
