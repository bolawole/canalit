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
			} catch (e) {
				console.error(e);
			}
		};

		getNews();
		setisloading(false);
	}, []);
	console.log(Data?.items);
	// get current post
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = Data?.items.slice(indexOfFirstPost, indexOfLastPost);
	const paginate = (pageNumber) => {
		setcurrentPage(pageNumber);
	};
	return (
		<div className={className}>
			<Header />
			<Post data={currentPosts} isloading={isloading} />
			<Pages
				postsPerPage={postsPerPage}
				totalPost={Data?.items.length}
				paginate={paginate}
			/>
			<Footer />
		</div>
	);
}

export default News;
