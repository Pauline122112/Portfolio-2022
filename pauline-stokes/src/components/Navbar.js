import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Navbar() {
  return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						{/* essentially the logo */}
						TRVL <i class="fa-brands fa-typo3"></i>
					</Link>
				</div>
			</nav>
		</>
	);
}

export default Navbar