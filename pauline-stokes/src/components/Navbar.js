import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faKiwiBird} from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
  return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						{/* essentially the logo */}
						PS 
						<FontAwesomeIcon icon={faKiwiBird}></FontAwesomeIcon>
						<FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
					</Link>
				</div>
			</nav>
		</>
	);
}

// <i class="fa-brands fa-typo3"></i> = <FontAwesomeIcon icon={fa}></FontAwesomeIcon>