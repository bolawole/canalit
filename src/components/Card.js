import React from "react";
import styled from "styled-components";
const Card = ({ className, title, content, color }) => {
	return (
		<div className={className}>
			<h4 style={{ backgroundColor: color }}>{title}</h4>
			<p>{content}</p>
		</div>
	);
};
export default styled(Card)`
	height: 300px;
	width: 250px;
	margin: auto 5px;
	border-radius: 5px;
	box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);

	h4 {
		padding: 1rem;
		color: white;
		text-align: center;
		font-size: 15px;
	}
	p {
		font-size: 13px;
		padding: 0.5rem;
	}
	@media screen and (max-width: 800px) {
		margin: 10px auto;
	}
`;
