import React from "react";
import styled from "styled-components";
function Post({ data, className }) {
	return (
		<div className={className}>
			{data?.map((edata) => {
				const { isoDate } = edata;
				const date = isoDate.split(":")[0].split("T")[0];
				// .split("-");
				return (
					<div key={edata.link} className="post_container">
						<a href={edata?.link}>{edata?.title}</a>
						<p>{edata.contentSnippet}</p>
						<h6
							style={{
								display: "flex",
								justifyContent: "flex-end",
								color: "gray",
								fontSize: "10px",
							}}
						>
							{date}
						</h6>
						{/* <p>{new Date(date)}</p> */}
					</div>
				);
			})}
		</div>
	);
}

export default styled(Post)`
	width: 50%;
	margin: 5rem auto;
	text-align: justify;
	@media screen and (max-width: 800px) {
		width: 100%;
		padding: 1rem;
		text-align: justify;
	}
`;
