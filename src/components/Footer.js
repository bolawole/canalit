import React from "react";
import "../css/footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="row footer_content">
				<div className="col-lg-4"></div>
				<div className="col-lg-4">
					<h6>Contact Us</h6>
					<ul>
						<li>
							<i className="fas fa-phone-alt footer_icon"></i>+1 (514) 589-7742
						</li>
						<li>
							<i className="fas fa-at footer_icon"></i>
							lisan@canalitconsulting.com
						</li>
						<li>
							<i className="fas fa-map-marker-alt footer_icon"></i>
							Montreal, QC
						</li>
					</ul>
					{/* <h6>Social Links</h6> */}
					<ul className="footer_social">
						<li>
							<i className="fab fa-instagram"></i>
						</li>
						<li>
							<i className="fab fa-facebook-f"></i>
						</li>
						<li>
							<i className="fab fa-twitter"></i>
						</li>
						<li>
							<i className="fab fa-google-plus-g"></i>
						</li>
					</ul>
				</div>
				<div className="col-lg-4">
					{/* <h6>Newsletter</h6>
					<p>You can trust us. we only send offers, not a single spam.</p>

					<form className="footer_form" action="">
						<input
							className="form-control"
							placeholder="Email Address"
							type="email"
						/>
						<button type="submit">
							<i className="fas fa-arrow-circle-right"></i>
						</button>
					</form> */}
				</div>
			</div>
			<div className="footer_right">
				<h6>
					<i className="fa fa-copyright" aria-hidden="true">
						{"     "} 2020 CanaLit <span>|</span> All Rights Reserved
					</i>
				</h6>
			</div>
		</div>
	);
}

export default Footer;
