import React from "react";

import styled from "styled-components";
const Pages = ({ postsPerPage, totalPost, paginate, className }) => {
	const pageNumber = [];
	console.log("this is the toal oost", totalPost);
	for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
		pageNumber.push(i);
	}
	return (
		<nav className={className}>
			<ul>
				{pageNumber.map((number) => (
					<li key={number} className="page-item">
						<a
							className="page-link"
							onClick={(e) => {
								e.preventDefault();
								paginate(number);
							}}
							href=""
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default styled(Pages)`
	ul {
		display: flex;
		flex-wrap: wrap;
	}
`;
