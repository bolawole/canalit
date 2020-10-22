import React, { useState } from "react";
import styled from "styled-components";
import Collapse from "react-bootstrap/Collapse";
function Visit({ className }) {
	const [isOpen1, setisOpen1] = useState(false);
	const [isOpen2, setisOpen2] = useState(false);
	const [isOpen3, setisOpen3] = useState(false);
	const [isOpen4, setisOpen4] = useState(false);
	return (
		<div className={className}>
			<div className="visit_header">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					x="0px"
					y="0px"
					viewBox="0 0 100 125"
					style={{ enableBackground: "new 0 0 100 100" }}
				>
					<g>
						<path d="M50,84.3c7.9,0,15.2-2.7,21-7.3l-1.2-0.3c-1.2-0.3-2.2-1.1-2.8-2.1c-3.3,2.3-7,3.9-11.1,4.8c0.4-0.4,0.8-0.8,0.8-1     c0-0.1,0.3-0.2,0.5-0.3c0.5-0.3,1-0.6,1.2-0.9c0.3-0.5,1.4-1.6,1.8-1.8c0.6-0.3,4.1-3.5,4.3-4c0.6-1.3,1.3-2.8,1.8-3.1     c0.8-0.6,0.1-1.8-0.2-2.2l-0.1-0.1c-0.3-0.5-2.3-0.7-2.6-0.7c-0.4,0-2.1-0.9-2.2-1.2c0-0.6-1.7-2.2-2.1-2.2     c-0.2,0-1.2-0.2-1.8-0.9c-0.7-0.8-3-1.3-3.7-1.3c-0.6,0-1.6-0.1-2.2-0.4C51,58.9,50,59.3,49,59.7c-0.2,0.1-0.4,0.2-0.5,0.2     c-0.3,0.1-2.3-0.3-2.8-0.5c-0.1-0.1-0.2-0.9-0.2-1.3c0-0.5-0.1-0.8-0.2-1c-0.1-0.2-0.6-0.4-1.5-0.6c-0.2-0.1-0.5-0.1-0.7-0.2     c0-0.1,0.1-0.4,0.2-0.5c0.3-0.7,0.5-1.2,0.3-1.6c-0.1-0.1-0.2-0.2-0.3-0.2c-0.4-0.1-1.1,0.3-1.7,0.8c-0.3,0.2-0.7,0.5-0.8,0.5     c-0.4,0-1.2-0.3-2.1-0.9c-0.5-0.3,0.1-2.1,0.4-2.9c0.1-0.4,0.2-0.7,0.3-0.9c0-0.2,1-0.5,2.4-0.5c0.4,0,0.9-0.1,1.5-0.2     c0.5-0.1,0.9-0.2,1.3-0.2c0.2,0,0.6,0.5,0.8,0.9c0.4,0.5,0.7,0.9,1.1,0.9c0.6-0.1,0.5-0.8,0.5-1.4c0-0.2,0-0.4,0-0.4     c0-0.3,0.8-1.6,1.4-1.9c0.7-0.4,1.7-1.8,1.4-2.5c0-0.3,1.3-1.1,1.7-1.4c0.2-0.1,0.4-0.2,0.5-0.3c0.1-0.1,0.3-0.2,0.4-0.3     c0.4-0.2,1-0.5,1-1.3c0-0.4,1.4-0.6,2.2-0.8c0.2,0,0.4-0.1,0.5-0.1c0.5-0.1,0.8-0.2,1-0.5c0.2-0.3,0-0.6-0.1-1     c-0.1-0.1-0.1-0.2-0.2-0.3c-0.3-0.7-0.1-1.1,0.5-1.6c0.3-0.2,0.8-0.2,1.3-0.3c0.6-0.1,1.2-0.1,1.8-0.4c0.4-0.2,0.6-0.4,0.7-0.6     c0.1-0.4-0.1-0.7-0.3-0.9c-0.1-0.1-0.2-0.2-0.2-0.3c-0.3-0.6-0.8-1-1.2-1.3c-0.2-0.2-0.4-1-0.5-1.5c-0.1-0.3-0.1-0.6-0.2-0.8     c-0.1-0.2-0.2-0.3-0.4-0.4c-0.5-0.2-1.2,0.1-1.6,0.3c0-0.1-0.1-0.3-0.1-0.4c-0.1-0.3-0.1-0.6-0.3-0.8c-0.1-0.1-0.4-0.3-0.6-0.6     c-0.4-0.4-1-0.9-1.3-1.2c-0.2-0.2-0.4-0.2-0.6-0.2c-0.5,0.1-0.9,0.7-1.3,1.3c-0.1,0.1-0.1,0.1-0.1,0.2c-0.6,0.9-0.7,1.7-0.3,2     c0,0,0.1,0.2-0.1,0.5c-0.2,0.5-0.5,0.8-0.7,0.8c0,0,0,0,0,0c-0.6-0.1-0.7,0.7-0.9,1.5c0,0.3-0.1,0.7-0.2,0.9     c-0.1-0.1-0.3-0.6-0.3-1.9v-0.2c0-0.2-0.1-0.3-0.2-0.4c-0.2-0.2-0.4-0.1-0.6-0.1c-0.3,0-0.4,0-0.5-0.1c-0.3-0.5-1.9-1.1-2.5-1.4     c0-0.8,0-1.8,0-1.9c0.2-0.3,2.7-2,3.2-2.1c0.8-0.3,2.8-1.6,3.1-1.9c0.4-0.2,0.4-0.5,0.4-0.7c-0.1-0.6-1.2-1.1-1.7-1.3     C50.5,23,49.9,23,49.2,23c-0.4,0-0.8,0-1.2-0.1c-1.7-0.3-3.1-0.3-4.3-0.2c-0.9,0.1-2.3,0-3.2-0.2c-0.4-0.1-0.8-0.2-1.1-0.2     c-0.1,0-0.4,0-0.6,0c3.5-1.4,7.3-2.2,11.3-2.2c4,0,7.9,0.8,11.4,2.3c0.1,0.4,0.2,0.8,0.4,1.2c0.4,0.9,1,2.4,1,3.5     c0,1.1,0.1,2.3,0,2.6c-0.1,0.3,2.2,3,2.7,3c0.5,0.1,0.9-0.3,1.2-0.8c0.3-0.5,0.8-1.1,1.7-1.8c0.6-0.4,2.1-0.6,3.2-0.7     c1,1.1,2,2.3,2.9,3.5c-0.2,0.2-0.5,0.4-0.6,0.5c-0.4,0.4-1.6,1.6-1.5,2.6c0.1,0.9,1.1,2.1,2.4,2.7c1.2,0.6,1.4,1.9,1.4,2.1     c0,0.2,1.7,1.3,1.7,1.3s-0.7,1.4-1.1,1.4c-0.3,0-0.6,1.4-0.6,2c0,0.6,0.7,1.6,1.5,2.1c0.8,0.6,2-1,2-1l0.2-0.1     c0.1,0.9,0.2,1.8,0.2,2.8c-1,0.2-2.3,0.7-2.7,0.9c-0.5,0.4-1.6,3.9-2.1,4.3c-0.5,0.3-1.5,5.1-1.6,5.6c0,0.3,0.8,2.1,1.7,3.4     c0.3,0.5,0.4,1.1,0.3,1.7l4.8,0.5c2.5-4.7,3.9-10.1,3.9-15.7c0-18.9-15.4-34.3-34.3-34.3c-18.9,0-34.3,15.4-34.3,34.3     S31.1,84.3,50,84.3z M28.1,29.7c0.2,0.1,0.5,0.3,0.9,0.6c0.2,0.2,0.2,1.6,0.2,3.1l0,0.1l0,0.1c0,0,1.3,3.1,0.1,5.5     c-1.3,2.6-1,6.8-0.4,7.7c0.6,0.8,3.4,4.5,3.8,4.9c0.3,0.3,1.3,3,1.4,3.3c0.1,0.3,1.9,2.6,3.9,2.6c1.1,0,2.5,0.6,3.3,1     c0.4,0.2,0.7,0.4,1,0.4c0.1,0,0.2,0.2,0.3,0.4c0.3,0.5,0.7,1.2,1.8,1.8c0.3,0.2,0.6,0.3,0.9,0.5c1,0.6,2.4,1.4,2.5,1.6     c0,0.1-0.2,0.3-0.4,0.5c-0.6,0.7-1.7,1.9-1.4,3.5c0.4,2.2,3.5,4.9,4.6,5.6c0.7,0.4,0.3,5,0,5.8c-0.1,0.3-0.2,0.8-0.2,1.3     c-0.1,0-0.2,0-0.3,0c-16.5,0-29.9-13.4-29.9-29.9C20.1,42.2,23.1,35,28.1,29.7z" />
						<path d="M92,38.6c0.2,0.9,1.1,1.5,1.9,1.5c0.2,0,0.4,0,0.5-0.1c1.1-0.3,1.7-1.4,1.4-2.5c-0.5-2-1.2-4-2-5.9     c-0.4-1-1.6-1.5-2.6-1.1c-1,0.4-1.5,1.6-1.1,2.6C90.8,35,91.5,36.8,92,38.6z" />
						<path d="M7.2,34.5c0.3,0.1,0.5,0.2,0.8,0.2c0.8,0,1.5-0.5,1.9-1.2c0.7-1.7,1.6-3.5,2.5-5.1c0.6-1,0.2-2.2-0.7-2.8     c-1-0.6-2.2-0.2-2.8,0.7c-1,1.8-2,3.7-2.7,5.6C5.6,32.9,6.1,34.1,7.2,34.5z" />
						<path d="M84.4,23.4c0.4,0.5,1,0.8,1.6,0.8c0.4,0,0.9-0.1,1.2-0.4c0.9-0.7,1-1.9,0.4-2.8c-1.3-1.6-2.6-3.2-4.1-4.7     c-0.8-0.8-2.1-0.8-2.9,0c-0.8,0.8-0.8,2.1,0,2.9C82,20.5,83.2,21.9,84.4,23.4z" />
						<path d="M17.8,19.9c0.5,0,1-0.2,1.4-0.6c1.3-1.3,2.8-2.6,4.3-3.8c0.9-0.7,1-1.9,0.4-2.8c-0.7-0.9-1.9-1-2.8-0.4     c-1.6,1.3-3.2,2.6-4.7,4.1c-0.8,0.8-0.8,2.1,0,2.9C16.7,19.7,17.3,19.9,17.8,19.9z" />
						<path d="M50,6.5c1.9,0,3.7,0.1,5.6,0.4c0.1,0,0.2,0,0.3,0c1,0,1.9-0.7,2-1.8C57.9,4,57.2,3,56.1,2.9c-2-0.3-4-0.4-6.1-0.4h-0.1     c-1.1,0-1.9,0.9-1.9,2S48.9,6.5,50,6.5z" />
						<path d="M32.5,10c0.3,0,0.5-0.1,0.8-0.2C35,9.1,36.8,8.5,38.6,8c1.1-0.3,1.7-1.4,1.4-2.5c-0.3-1.1-1.4-1.7-2.5-1.4     c-2,0.5-4,1.2-5.9,2c-1,0.4-1.5,1.6-1.1,2.6C30.9,9.6,31.7,10,32.5,10z" />
						<path d="M66.5,9.8c1.7,0.7,3.5,1.6,5.1,2.5c0.3,0.2,0.7,0.3,1,0.3c0.7,0,1.4-0.4,1.8-1c0.6-1,0.2-2.2-0.7-2.8     c-1.8-1-3.7-2-5.6-2.7c-1-0.4-2.2,0.1-2.6,1.1C65,8.2,65.5,9.4,66.5,9.8z" />
						<path d="M66.7,90.2c-1.7,0.7-3.5,1.3-5.4,1.8c-1.1,0.3-1.7,1.4-1.4,2.5c0.2,0.9,1.1,1.5,1.9,1.5c0.2,0,0.4,0,0.5-0.1     c2-0.5,4-1.2,5.9-2c1-0.4,1.5-1.6,1.1-2.6C68.9,90.2,67.7,89.7,66.7,90.2z" />
						<path d="M50,93.5c-1.9,0-3.8-0.1-5.6-0.4c-1.1-0.1-2.1,0.6-2.3,1.7c-0.1,1.1,0.6,2.1,1.7,2.3c2,0.3,4.1,0.4,6.1,0.4h0     c1.1,0,2-0.9,2-2C52,94.4,51.1,93.5,50,93.5z" />
						<path d="M95.5,47.9c-1.1,0-2,1-2,2.1c0,1.9-0.1,3.8-0.4,5.7c-0.1,1.1,0.6,2.1,1.7,2.3c0.1,0,0.2,0,0.3,0c1,0,1.9-0.7,2-1.8     c0.3-2,0.4-4.1,0.4-6.2v-0.2C97.5,48.7,96.6,47.9,95.5,47.9z" />
						<path d="M15.6,76.5c-0.7-0.9-1.9-1-2.8-0.4c-0.9,0.7-1,1.9-0.4,2.8c1.3,1.6,2.6,3.2,4.1,4.7c0.4,0.4,0.9,0.6,1.4,0.6     c0.5,0,1-0.2,1.4-0.6c0.8-0.8,0.8-2.1,0-2.9C18,79.4,16.7,78,15.6,76.5z" />
						<path d="M8,61.3c-0.3-1.1-1.4-1.7-2.5-1.4c-1.1,0.3-1.7,1.4-1.4,2.5c0.5,2,1.2,4,2,5.9C6.5,69,7.2,69.5,8,69.5     c0.3,0,0.5-0.1,0.8-0.2c1-0.4,1.5-1.6,1.1-2.6C9.1,65,8.5,63.1,8,61.3z" />
						<path d="M33.4,90.2c-1.7-0.7-3.5-1.6-5.1-2.5c-1-0.6-2.2-0.2-2.8,0.7c-0.6,1-0.2,2.2,0.7,2.8c1.8,1,3.7,2,5.6,2.7     c0.3,0.1,0.5,0.2,0.8,0.2c0.8,0,1.5-0.5,1.9-1.2C34.9,91.8,34.4,90.6,33.4,90.2z" />
						<path d="M6.5,50c0-1.9,0.1-3.8,0.4-5.6c0.1-1.1-0.6-2.1-1.7-2.3C4,42,3,42.8,2.9,43.9c-0.3,2-0.4,4.1-0.4,6c0,0,0,0.2,0,0.2     c0,1.1,0.9,2,2,2C5.6,52.1,6.5,51.1,6.5,50z" />
						<path d="M94.4,63.6c-1.7,0.1-3.4,0.9-4.5,2.2L86,70.4l-11.5-1.3c-0.7-0.1-1.3,0.2-1.8,0.7l-2.1,2.4c-0.2,0.2-0.1,0.5,0.2,0.6     l10.9,2.8L77,82.2l-4.4-0.7c-0.5-0.1-1,0.1-1.3,0.5l-0.6,0.7c-0.1,0.2-0.1,0.4,0.1,0.5l3.8,2.4c-0.3,0.7-0.1,1.5,0.5,2     c0.6,0.5,1.4,0.6,2.1,0.2l3,3.4c0.1,0.2,0.4,0.2,0.6,0l0.6-0.7c0.3-0.4,0.4-0.9,0.3-1.4L80.2,85l5.8-5.7l4.5,10.3     c0.1,0.2,0.4,0.3,0.6,0.1l2.1-2.4c0.4-0.5,0.6-1.2,0.4-1.8l-3.1-11.2l3.9-4.6c1.1-1.3,1.7-3.1,1.5-4.8     C95.8,64.1,95.1,63.6,94.4,63.6z" />
					</g>
				</svg>
				<div className="visit_content">
					<h2>Visit</h2>
					<h5>Canada Remains Top Desitnations for tourist</h5>
					<p>
						Find Out if you need a Visa. Answer A few questions through our
						assement portal and we will surely get back to you
					</p>
				</div>

				{/* <button>Do your assement here</button> */}
			</div>
			<div className="visit_section2">
				<div
					onClick={() => {
						setisOpen1((prev) => !prev);
					}}
					className="visit_question"
				>
					<h5>What is Vistor Visa {isOpen1 ? "-" : "+"}</h5>
				</div>
				<Collapse in={isOpen1}>
					<div id="example-collapse-text" className="visit_collapse">
						A Temporary Resident Visa (TRV), also referred to as a visitor visa
						or Canada Tourist visa, is an official document issued by a Canadian
						visa office that is placed in your passport to show that you have
						met the requirements for admission to Canada as a temporary resident
						(either as a visitor, a student, or a worker).
					</div>
				</Collapse>
				<div
					onClick={() => {
						setisOpen2((prev) => !prev);
					}}
					className="visit_question"
				>
					<h5>Basic Requirements {isOpen2 ? "-" : "+"}</h5>
				</div>
				<Collapse in={isOpen2}>
					<div id="example-collapse-text " className="visit_collapse">
						<p>
							There are a number for basic requirements for a Canadian visitor
							visa. This requirements include:
						</p>
						<ul>
							<li>have a valid travel document (passport)</li>
							<li>be in good health</li>
							<li>have no criminal or immigration-related convictions</li>
							<li>
								prove that you have ties such as a job, home, financial assets
								or family that prove you will be returning to your home country
							</li>
							<li>prove that you will leave Canada at the end of your visit</li>
							<li>
								have enough money for your stay which depends where and how long
								you stay
							</li>
						</ul>
					</div>
				</Collapse>
				{/* <div
					onClick={() => {
						setisOpen3((prev) => !prev);
					}}
					className="visit_question"
				>
					<h5>
						I am a Graduate and i will Like to Work after my Studies{" "}
						{isOpen3 ? "-" : "+"}
					</h5>
				</div> */}
				<h6>
					Have any Question? Our contact details can be found in the Footer
					section
				</h6>
				{/* <Collapse in={isOpen3}>
					<div id="example-collapse-text " className="visit_collapse">
						After graduating from a designated Canadian educational institution,
						international graduates may work in Canada for up to three years.
						<h6>ELIGIBILITY REQUIREMENTS</h6>
						<ul>
							<li>
								Completed studies in Canada in an academic, vocational or
								professional training program that is at least eight months long
								at an eligible{" "}
							</li>
							<li>
								Held full-time student status in Canada during every academic
								session of the program or programs of study completed and
								included as part of their post-graduation work permit
								application; Some exceptions may be made for leave from studies
								and final academic session.
							</li>
							<li>
								Received a transcript and an official letter from the eligible
								DLI confirming that the applicant has met the requirements to
								complete their program of study; The transcript and official
								letter must be included in a post-graduation work permit
								application.
							</li>
							<li>
								Graduated from: a public post-secondary institution, such as a
								college a trade or technical school a university CEGEP (in
								Quebec) a private post-secondary school (in Quebec) that
								operates under the same rules as public schools in Quebec; a
								private secondary or post-secondary school (in Quebec) that
								offers qualifying programs of 900 hours or longer and results in
								the issuance of a diplôme d’études professionnelles (DEP) or an
								attestation de spécialisation professionnelle (ASP); or Canadian
								private school that can award degrees under provincial law (for
								example, Associate, Bachelor’s, Master’s or Doctorate degree)
								but only if the student was enrolled in a study program that
								leads to a degree as authorized by the province.
							</li>
						</ul>
					</div>
				</Collapse> */}
			</div>
		</div>
	);
}

export default styled(Visit)`
	.visit_header {
		height: 300px;
		color: white;
		background-color: #41b3a3;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5rem;
		margin-top: 4rem;
	}
	svg {
		height: 300px;
		fill: white;
		margin-right: 3rem;
	}
	.visit_collapse {
		background: #0000000f;
		padding: 2rem;
		margin-bottom: 1rem;
	}
	.visit_content {
		flex: 0.3;
	}
	.visit_section2 {
		width: 50%;
		margin: 3rem auto;
		li {
			list-style: circle;
		}
		.visit_question {
			background-color: #41b3a3;
			padding: 0.5rem;
			margin-bottom: 10px;
			box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
			color: white;
			border-radius: 5px;
			cursor: pointer;
		}
	}

	button {
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		color: #e8a87c;
		font-weight: bold;
		transition: background-color 0.3s ease;
		margin-left: 3rem;
	}
	button:hover {
		background-color: red;
		color: white;
	}
	@media screen and (max-width: 800px) {
		h2 {
			text-align: center;
		}
		.visit_section2 {
			width: 100%;
			padding: 3rem 0.5rem;
			text-align: justify;
		}

		.visit_header {
			display: block;
			padding: 1rem;
			height: max-content;
		}
	}
`;
