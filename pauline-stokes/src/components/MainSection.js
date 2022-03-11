import React from 'react'
import '../App.css'
import { Button } from './Button';
import './MainSection.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default function MainSection() {
  return (
		<div className="main-container">
			<video src="./public/videos/video-2.mp4" autoPlay loop muted />
			<h1>ADVENTURE AWAITS</h1>
			<p>What are you waiting for?</p>
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
			>
				WATCH TRAILER <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
			</Button>
		</div>
	);
}