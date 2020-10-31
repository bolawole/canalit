import React, { useEffect, useState } from "react";
import Pages from "./Pages";
import Parser from "rss-parser";
import styled from "styled-components";
import Post from "./Post";
import Footer from "./Footer";
import Header from "./Header";

function News({ className }) {
	const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
	let parser = new Parser();

	const [Data, setData] = useState();
	const [isloading, setisloading] = useState(true);
	const [currentPage, setcurrentPage] = useState(1);
	const [postsPerPage, setpostsPerPage] = useState(30);
	useEffect(() => {
		const getNews = async () => {
			try {
				const feed = await parser.parseURL(
					CORS_PROXY + "https://www.canadavisa.com/news/rss.html"
				);
				setData(feed);
				setisloading(false);
			} catch (e) {
				console.error(e);
			}
		};

		getNews();
	}, []);

	// get current post
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = Data?.items.slice(indexOfFirstPost, indexOfLastPost);
	const paginate = (pageNumber) => {
		setcurrentPage(pageNumber);
	};
	return (
		<div className={className}>
			{isloading && (
				<div className="News_loading">
					<div class="lds-ripple">
						<div></div>
						<div></div>
					</div>
					<h6>Loading...</h6>
				</div>
			)}
			{!isloading && (
				<div>
					<Header />
					<Post data={Data?.items.slice(0, 16)} isloading={isloading} />
					{/* <Pages
						postsPerPage={postsPerPage}
						totalPost={Data?.items.length}
						paginate={paginate}
					/> */}
					<Footer />
				</div>
			)}
		</div>
	);
}

export default styled(News)`
	.News_loading {
		height: 100vh;
		width: 100vw;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
	}
	.lds-ripple {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}
	.lds-ripple div {
		position: absolute;
		border: 4px solid black;
		opacity: 1;
		border-radius: 50%;
		animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}
	.lds-ripple div:nth-child(2) {
		animation-delay: -0.5s;
	}
	@keyframes lds-ripple {
		0% {
			top: 36px;
			left: 36px;
			width: 0;
			height: 0;
			opacity: 1;
		}
		100% {
			top: 0px;
			left: 0px;
			width: 72px;
			height: 72px;
			opacity: 0;
		}
	}
`;
