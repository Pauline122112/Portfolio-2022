import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faKiwiBird} from '@fortawesome/free-solid-svg-icons'
// import { faTypo3 } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
	const [click, setClick] = useState(false)
	// setting the state to update and change it from whatever it was to whatever I want to change it to- this is for the menu. 
	const handleClick = () => setClick(!click)
	//basically setting it to true or the opposite of what is in the useState
	//Switches from hamburger icon to X
  return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						{/* essentially the logo */}
						PS 
						<FontAwesomeIcon icon={faKiwiBird}></FontAwesomeIcon>
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'}
						 />
						 {/* toggle if not clicked will be hamburger menu, on click will be the bars */}
						</div>
				</div>
			</nav>
		</>
	);
}

// <i class="fa-brands fa-typo3"></i> = <FontAwesomeIcon icon={faTypo3}></FontAwesomeIcon>

// menu-icon- burger menu- Will use state to change from an X to a hamburger menu
