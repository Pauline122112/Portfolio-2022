import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faKiwiBird} from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button.js'
import './Navbar.css'
// import { faTypo3 } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
	const [click, setClick] = useState(false)
	// setting the state to update and change it from whatever it was to whatever I want to change it to- this is for the menu.
	const [button, setButton] = useState(true) 
	const handleClick = () => setClick(!click)
	//basically setting it to true or the opposite of what is in the useState
	//Switches from hamburger icon to X
	const closeMobileMenu = () => setClick(false)

	const showButton = () => {
		if(window.innerWidth <= 960) {
			setButton(false)

		} else {
			setButton(true)
		}
	}

	//useEffect helps to render one time so that it does not show up again in regards to Navbar. 

	useEffect(() => {
		showButton()
	}, [])

	window.addEventListener('resize', showButton)

  return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						{/* essentially the logo */}
						PS
						<FontAwesomeIcon icon={faKiwiBird}></FontAwesomeIcon>
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
						{/* toggle if not clicked will be hamburger menu, on click will be the bars */}
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/work" className="nav-links" onClick={closeMobileMenu}>
								Work
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-links" onClick={closeMobileMenu}>
								About
							</Link>
						</li>

						<li>
							<Link 
							to="/sign-up" 
							className="nav-links-mobile" 
							onClick={closeMobileMenu}
							>
								Sign Up
							</Link>
						</li>
					</ul>
					{button && <Button buttonStyle="btn--outline">Sign Up</Button>}
				</div>
			</nav>
		</>
	);
}

// <i class="fa-brands fa-typo3"></i> = <FontAwesomeIcon icon={faTypo3}></FontAwesomeIcon>

// menu-icon- burger menu- Will use state to change from an X to a hamburger menu
