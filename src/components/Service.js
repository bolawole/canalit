import React from "react";
import "../css/service.css";
import { Link } from "react-router-dom";

function Service(props) {
	return (
		<div className="service">
			<img className="service_img" src={props.source} alt="study visa" />
			<div className="service_info">
				<h4>{props.title}</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum
					labore cum distinctio et placeat quisquam saepe ea sequi veritatis.
				</p>
				<button>
					<Link
						to={
							props.title === "TEMPORARY"
								? "/studyinCanada"
								: props.title === "IMMIGRATE"
								? "/visitCanada"
								: props.title === "CITIZENSHIP"
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
