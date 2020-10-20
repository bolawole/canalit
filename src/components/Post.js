import React from "react";
import styled from "styled-components";
function Post({ data, isloading, className }) {
	if (isloading) {
		return <h2>Loading....</h2>;
	}
	return (
		<div className={className}>
			{console.log(data)}
			{data?.map((edata) => {
				return (
					<div key={edata.link} className="post_container">
						<a href={edata?.link}>{edata?.title}</a>
						<p>{edata.contentSnippet}</p>
						<p>{edata.pubDate}</p>
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
