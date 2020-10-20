import React from "react";
import styled from "styled-components";
import Slider from "@farbenmeer/react-spring-slider";
import Fade from "react-reveal/Fade";

function Testimony({ className }) {
	const Testimony = [
		"Canalit Consultant handled my visiting Visa and renewal. The service was extremely great, and I was very satisfied. They went the extra miles to put everything in place while staying efficient. They did an excellent job for me. - Beatrice Akhaine",
		"I met Ms. Lisa when I was struggling to complete the application for our citizenship. l told her about it and she requested for some documents and in less than a few days the forms were ready and sent to immigration Canada. In the appropriate time, we were called for the exam and interview. All thanks to the services of Ms. Lisa and Canalit Consultants who worked so hard to get us there. I’ll, therefore, not hesitate to recommend their services to anyone for the trust and reliability. Just give her the required documents, go to sleep and consider it done. Thank you. - The Iyamahs.",
		"Canalit Consulting Services first handled my spousal sponsorship in 2014 and then later my Canadian citizenship application in 2019. I was so impressed at the meticulous job that was done. They were so organized and detailed which was comforting. My consultant kept me updated with her progress which, in my opinion, reduced delays and errors. I recommend Canalit’s services to anyone seeking an exceptional and efficient job – Charles Tochi",
		"Canalit is my go to immigration consultants. Their consultants are readily available to answer any inquiries I have. I have always used their services for my immigration needs; study / work permit, investment, sponsoring of adopted children and even family sponsorship for my parent. I am always impressed by their services. – Lulu Basil",
	];
	const testimony_style = {
		height: "500px",
		padding: "3rem",
		display: "flex",
		alignItems: "center",
		p: {
			textDecoration: "italic",
		},
	};

	return (
		<div className={className}>
			<Fade right delay={500} duration={2000} effect="fadeInRight">
				<h3 className="testinomy_header">CLIENT TESTIMONIES</h3>
				<TestimonySLider>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						x="0px"
						y="0px"
						viewBox="0 0 64 80"
						enable-background="new 0 0 64 64"
						className="svg1"
					>
						<g>
							<path d="M49.861,30.774c-1.584-0.158-5.069-0.158-5.069-2.376c0-3.009,4.435-6.969,11.563-11.246   c2.217-1.426,6.812-3.643,6.812-6.653c0-2.376-1.743-4.118-5.386-3.643c-3.485,0.475-8.871,2.851-15.998,8.87   C34.338,21.904,27.369,32.2,27.369,42.337c0,10.296,6.969,20.592,18.216,20.592c9.028,0,16.79-6.811,16.79-16.157   C62.374,39.644,57.464,31.408,49.861,30.774z" />
							<path d="M27.594,26.32c-1.301-0.68-2.728-1.125-4.268-1.253c-1.584-0.158-5.069-0.158-5.069-2.376   c0-3.009,4.435-6.969,11.563-11.246c2.218-1.426,6.811-3.643,6.811-6.653c0-2.376-1.743-4.118-5.386-3.643   c-3.485,0.475-8.871,2.851-15.998,8.87C7.803,16.197,0.833,26.493,0.833,36.631c0,10.296,6.969,20.592,18.216,20.592   c2.644,0,5.178-0.588,7.441-1.649c-2.219-4.012-3.402-8.654-3.402-13.236C23.089,36.68,24.911,31.193,27.594,26.32z" />
						</g>
					</svg>
					<Slider auto={12000} hasArrows>
						{Testimony.map((each_testimony) => {
							return (
								<div
									key={each_testimony[-1]}
									draggable="false"
									style={testimony_style}
								>
									<p>{each_testimony}</p>
								</div>
							);
						})}
					</Slider>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						x="0px"
						y="0px"
						viewBox="0 0 64 80"
						enable-background="new 0 0 64 64"
						className="svg2"
					>
						<g>
							<path d="M49.861,30.774c-1.584-0.158-5.069-0.158-5.069-2.376c0-3.009,4.435-6.969,11.563-11.246   c2.217-1.426,6.812-3.643,6.812-6.653c0-2.376-1.743-4.118-5.386-3.643c-3.485,0.475-8.871,2.851-15.998,8.87   C34.338,21.904,27.369,32.2,27.369,42.337c0,10.296,6.969,20.592,18.216,20.592c9.028,0,16.79-6.811,16.79-16.157   C62.374,39.644,57.464,31.408,49.861,30.774z" />
							<path d="M27.594,26.32c-1.301-0.68-2.728-1.125-4.268-1.253c-1.584-0.158-5.069-0.158-5.069-2.376   c0-3.009,4.435-6.969,11.563-11.246c2.218-1.426,6.811-3.643,6.811-6.653c0-2.376-1.743-4.118-5.386-3.643   c-3.485,0.475-8.871,2.851-15.998,8.87C7.803,16.197,0.833,26.493,0.833,36.631c0,10.296,6.969,20.592,18.216,20.592   c2.644,0,5.178-0.588,7.441-1.649c-2.219-4.012-3.402-8.654-3.402-13.236C23.089,36.68,24.911,31.193,27.594,26.32z" />
						</g>
					</svg>
				</TestimonySLider>
			</Fade>
		</div>
	);
}

const TestimonySLider = styled.div`
	width: 50%;
	margin: 5rem auto;
	padding: 3rem;
	height: 500px;
	position: relative;
	background-color: white;
	/* border: 1px solid black; */
	border-radius: 10px;
	box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
`;
export default styled(Testimony)`
	position: relative;

	.testinomy_header {
		text-align: center;
		margin-top: 3rem;
	}
	.svg1 {
		fill: white;
		height: 60px;
		width: 60px;
		background: #041c3a96;
		padding: 10px;
		border-radius: 50%;
		position: absolute;
		top: 2%;
		left: 2%;
	}
	.svg2 {
		transform: scaleX(-1);
		fill: white;
		height: 60px;
		width: 60px;
		background: #041c3a96;
		padding: 10px;
		border-radius: 50%;
		position: absolute;
		bottom: 2%;
		right: 2%;
	}
`;
