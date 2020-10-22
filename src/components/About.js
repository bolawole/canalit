import React from "react";
import styled from "styled-components";
function About({ className }) {
	return (
		<div className={className} id="about">
			<p>
				Canalit Consulting Services is a Canadian based one-stop-shop for all
				Canada immigration matters. Our goal is simple;{" "}
				<strong>helping you achieve your migration dreams.</strong> The
				immigration process can be overwhelming and time confusing, which is why
				my team and I are focused on making the entire process easier, faster
				and more efficient for all our clients. We take away the hassle so you
				can focus on what is most important; family.
			</p>
		</div>
	);
}

export default styled(About)`
	width: 100%;
	margin: 5rem auto;
	background-color: white;
	/* box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75); */
	/* border-radius: 10px; */
	padding: 2rem;
	background-color: #80808012;
	p {
		width: 50%;
		margin: 3rem auto;
		font-family: "open sans" sans-serif;
		text-align: justify;
		font-weight: 600;
	}
	@media screen and (max-width: 800px) {
		p {
			width: 100%;
		}
	}
`;
