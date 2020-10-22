import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Fade from "react-reveal/Fade";
import Footer from "./Footer";
import Work from "./Work";
import Study from "./Study";
import Visit from "./Visit";

const ReadMore = ({ className }) => {
	return (
		<div className={className}>
			<Header />
			<Fade
				// right
				delay={300}
				duration={900}
				effect="fadeInRight"
			>
				<p className="readmore_Heading">
					A Temporary Resident Visa (TRV), also referred to as a visitor visa,
					is an official document issued by a Canadian visa office that is
					placed in your passport to show that you have met the requirements for
					admission to Canada as a temporary resident (either as a visitor, a
					student, or a worker).
				</p>

				<section className="study">
					<Study />
				</section>

				<section className="work">
					<Work />
				</section>
				<section className="visit">
					<Visit />
				</section>
			</Fade>
			<Footer />
		</div>
	);
};
export default styled(ReadMore)`
	font-family: sans-serif;
	.readmore_Heading {
		width: 50%;
		margin: 5rem auto;
	}
	@media screen and (max-width: 800px) {
		display: block;
		.readmore_Heading {
			width: 100%;
			margin: 5rem auto;
			text-align: justify;
			padding: 1rem;
		}
	}
`;
