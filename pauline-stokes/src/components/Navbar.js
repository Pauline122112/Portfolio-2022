import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faKiwiBird} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						{/* essentially the logo */}
						TRVL <FontAwesomeIcon icon={faKiwiBird}></FontAwesomeIcon>
					</Link>
				</div>
			</nav>
		</>
	);
}

