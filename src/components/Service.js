import React from "react";
import "../css/service.css";

function Service(props) {
	return (
		<div className="service">
			<img className="service_img" src={props.source} alt="study visa" />
			<div className="service_info">
				<h4>{props.title} VISA</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum
					labore cum distinctio et placeat quisquam saepe ea sequi veritatis.
				</p>
				<button>Read More</button>
			</div>
		</div>
	);
}

export default Service;
