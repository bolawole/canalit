import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/banner.css";

function Banner() {
	return (
		<div className="banner">
			<div className="banner_logo">
				<h5>Do You need Assurance?</h5>
			</div>

			<div className="banner_info">
				<ul>
					<li>
						<div className="banner_number">
							<i className="fas fa-phone-square-alt banner_icon"></i>
							+1 (438) 388-1039
						</div>
					</li>
					<li>
						<div className="" id="banner_emailAddress">
							<i className="far fa-envelope banner_icon"></i>
							lisan@canalitconsulting.com
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Banner;
