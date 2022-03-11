import React from 'react'
import '../App.css'
import { Button } from './Button.js';
import './MainSection.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

 function MainSection() {
  return (
		<div className="main-container">
			<video src="/videos/video-1.mp4" autoPlay loop muted />
			<h1>ADVENTURE AWAITS</h1>
			<p>What are you waiting for?</p>
			<div className="main-btns">
				<Button
					className="btns"
					buttonStyle="btn--outline"
					buttonSize="btn--large"
				>
					GET STARTED
				</Button>
				<Button
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
					onClick={console.log("hey")}
				>
					WATCH TRAILER <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
				</Button>
			</div>
		</div>
	);
}

export default MainSection