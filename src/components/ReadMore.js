import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";

import Footer from "./Footer";
import Work from "./Work";
import Study from "./Study";
import Visit from "./Visit";

const ReadMore = ({ className }) => {
	return (
		<div className={className}>
			<Header />
			<section className="study">
				<Study />
			</section>

			<section className="work">
				<Work />
			</section>
			<section className="visit">
				<Visit />
			</section>
			<Footer />
		</div>
	);
};
export default styled(ReadMore)`
	@media screen and (max-width: 800px) {
		display: block;
	}
`;
