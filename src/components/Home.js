import React, { useState } from "react";

import Banner from "./Banner";
import Header from "./Header";
import Landing from "./Landing";
import Services from "./Services";
import Footer from "./Footer";
import About from "./About";
import Testimony from "./Testimony";

function Home() {
	const [showScroll, setShowscroll] = useState(false);
	const handleArrow = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	window.onscroll = () => {
		if (window.pageYOffset < 300) {
			setShowscroll(false);
		} else setShowscroll(true);
	};
	return (
		<div className="home">
			<Banner />
			<Header />
			<Landing />
			<About />
			<Services />
			<Testimony />
			<Footer />
			<div
				style={{
					transition: "opacity ease 3s",
					display: showScroll ? "block" : "none",
					opacity: showScroll ? "1" : "0",
				}}
				onClick={handleArrow}
				className="home_up"
			>
				<i className="fas fa-chevron-up"></i>
			</div>
		</div>
	);
}

export default Home;
