import React from "react";
import Service from "./Service";
import Fade from "react-reveal/Fade";

function Services() {
	const services = [
		{
			title: "TEMPORARY PERMIT /VISA",
			source:
				"https://images.pexels.com/photos/901964/pexels-photo-901964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
			content:
				"A Temporary Resident Visa (TRV), also referred to as a visitor visa, is an official document.... ",
		},
		{
			title: "IMMIGRATE",

			source:
				"https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
			content:
				"Are you interested in immigration to Canada, but not sure how to do it? Whether ...",
		},
		{
			title: "CITIZENSHIP",
			source:
				"https://images.pexels.com/photos/935474/toronto-beauty-clouds-skyline-935474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

			content:
				"Canadian citizenship. Apply to become a Canadian citizen, prepare for the citizenship test, and find out how you can resume or give up ...",
		},
	];
	return (
		<div className="services" id="services">
			<Fade
				// right
				delay={300}
				duration={900}
				effect="fadeInRight"
			>
				<h1 style={style}>OUR SERVICES</h1>

				<div className="service_container">
					{services.map((service) => (
						<Service data={service} />
					))}
				</div>
			</Fade>
		</div>
	);
}
const style = {
	textAlign: "center",
};
export default Services;
