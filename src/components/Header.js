import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {Link} from 'react-scroll'
import "../css/header.css";
import logo from "../Assets/Logo.png";

function Header() {
	const [menu, setMenu] = useState(false);

	const handleState = () => {
		setMenu(!menu);
		console.log("change state logic");
	};
	return (
		<div className="header">
			<Link to="/">
				<div className="header_info">
					<img className="header_img" src={logo} alt="Canalit Logo" />
				</div>
			</Link>

			<nav className="header_nav">
				<div onClick={handleState} className="header_hamburger">
					<i className={menu ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul>
					<li>
						<Link to="/about"> Who we are</Link>
					</li>
					<li>Visa Catergories</li>
					<li>Contact</li>
					<li>Latest News</li>
					<li>Our Services</li>
				</ul>
			</nav>
			<div
				className={`header_hamburger_menu ${
					menu ? "header_hamburger_menu_active" : " "
				}`}
			>
				<ul>
					<li>
						<Link to="/about"> Who we are</Link>
					</li>
					<li>Visa Catergories</li>
					<li>Contact</li>
					<li>Latest News</li>
					<li>Our Services</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
