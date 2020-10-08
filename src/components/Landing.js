import React, { useState, useEffect } from "react";
import "../css/landing.css";
import styled from "styled-components";
import Slider from "@farbenmeer/react-spring-slider";

const Landing = () => {
	const imagestyle = (src) => ({
		backgroundSize: "cover",
		backgroundImage: `url(${src})`,
		height: "100%",
		// width: "100%",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "100%",
	});

	const images = [
		"https://images.pexels.com/photos/935474/toronto-beauty-clouds-skyline-935474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		"https://images.pexels.com/photos/2960861/pexels-photo-2960861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		"https://images.pexels.com/photos/63332/science-world-false-creek-vancouver-british-columbia-63332.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		"https://images.pexels.com/photos/1739264/pexels-photo-1739264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		"https://images.pexels.com/photos/2777056/pexels-photo-2777056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	];
	return (
		<div className="landing__">
			<Slider auto={7000} hasBullets hasArrows>
				{images.map((each_image) => {
					return (
						<div
							key={each_image}
							draggable="false"
							style={imagestyle(each_image)}
						></div>
					);
				})}
			</Slider>
			<div className="landing_overlay"></div>
			<div className="landing_book">
				<p>We are Leading In Travels Immigration and Visa</p>
				<p id="landing_start">Start Your Immigration Journey Here</p>
				{/* <button>Book a Consultant</button> */}

				<button>
					<a href="http://ecloudfile.com/assessment/CCP2019458">
						Check Your Eligibility
					</a>
				</button>
				{/* <button>
					<Link to="/free-assessment-form"> Check Your Eligibility</Link>
				</button> */}
			</div>
		</div>
	);
};

export default Landing;
