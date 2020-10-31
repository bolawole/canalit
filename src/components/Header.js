import React, { useState } from "react";
import { Link as Linkrouter } from "react-router-dom";
import { Link } from "react-scroll";
import "../css/header.css";
import logo from "../Assets/Logo.png";

function Header() {
	const [menu, setMenu] = useState(false);

	const handleState = () => {
		setMenu(!menu);
	};
	return (
		<div className="header">
			<div className="header_info">
				<Linkrouter to="/home">
					<img className="header_img" src={logo} alt="Canalit Logo" />
				</Linkrouter>
			</div>

			<nav className="header_nav">
				<div onClick={handleState} className="header_hamburger">
					<i className={menu ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul>
					<li>
						<Link
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							duration={1000}
						>
							{" "}
							Who we are
						</Link>
					</li>
					{/* <li>Visa Catergories</li>
					<li>Contact</li> */}
					<li>
						<Linkrouter to="/immigrationnews">Latest News</Linkrouter>{" "}
					</li>
					<li>
						<Link
							activeClass="active"
							to="about"
							offset={-50}
							spy={true}
							smooth={true}
							duration={1000}
						>
							{" "}
							Our Services
						</Link>
					</li>
				</ul>
			</nav>
			<div
				className={`header_hamburger_menu ${
					menu ? "header_hamburger_menu_active" : " "
				}`}
			>
				<ul>
					<li>
						<Link
							activeClass="active"
							to="services"
							spy={true}
							offset={-600}
							smooth={true}
							duration={1000}
						>
							{" "}
							Who we are
						</Link>
					</li>
					{/* <li>Visa Catergories</li>
					<li>Contact</li> */}
					<li>
						<Linkrouter to="/immigrationnews">Latest News</Linkrouter>
					</li>
					<li>
						<Link
							activeClass="active"
							to="services"
							spy={true}
							smooth={true}
							offset={-150}
							duration={1000}
						>
							{" "}
							Our Services
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
