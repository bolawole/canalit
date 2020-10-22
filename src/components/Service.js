import React from "react";
import "../css/service.css";
import { Link } from "react-router-dom";

function Service({ data }) {
	const { title, source, content } = data;
	return (
		<div className="service">
			<img className="service_img" src={source} alt="study visa" />
			<div className="service_info">
				<h4>{title}</h4>
				<p>{content}</p>
				<button>
					<Link
						to={
							title === "TEMPORARY"
								? "/studyinCanada"
								: title === "IMMIGRATE"
								? "/visitCanada"
								: title === "CITIZENSHIP"
								? "/canadacitizenship"
								: "/studyinCanada"
						}
					>
						{" "}
						Read More
					</Link>
				</button>
			</div>
		</div>
	);
}

export default Service;
