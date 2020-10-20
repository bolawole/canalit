import React from "react";
import Service from "./Service";

function Services() {
	return (
		<div className="services" id="services">
			<h1 style={style}>OUR SERVICES</h1>
			<div className="service_container">
				<Service
					title="TEMPORARY PERMIT /VISA"
					source="https://images.pexels.com/photos/901964/pexels-photo-901964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				/>
				<Service
					title="IMMIGRATE"
					source="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				/>
				<Service
					title="CITIZENSHIP"
					source="https://images.pexels.com/photos/935474/toronto-beauty-clouds-skyline-935474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				/>
			</div>
		</div>
	);
}
const style = {
	textAlign: "center",
};
export default Services;
