import React, { useState } from "react";
import styled from "styled-components";
import Collapse from "react-bootstrap/Collapse";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
const Work = ({ className }) => {
	const [isOpen1, setisOpen1] = useState(false);
	const [isOpen2, setisOpen2] = useState(false);
	const [isOpen3, setisOpen3] = useState(false);
	const [isOpen4, setisOpen4] = useState(false);
	return (
		<div className={className}>
			<div className="work_header">
				<svg
					// xmlns="http://ns.adobe.com/Extensibility/1.0/"
					// xmlns="http://ns.adobe.com/AdobeIllustrator/10.0/"
					// xmlns="http://ns.adobe.com/Graphs/1.0/"
					xmlns="http://www.w3.org/2000/svg"
					// xmlns:xlink="http://www.w3.org/1999/xlink"
					version="1.1"
					x="0px"
					y="0px"
					viewBox="0 0 100 125"
					style={{ enableBackground: "new 0 0 100 100" }}
					// xml:space="preserve"
				>
					<g>
						<circle cx="39.4" cy="13" r="10.5" />
						<path d="M79.6,86.2c0,1.9-1.5,3.4-3.4,3.4h-2.6c-1.9,0-3.4-1.5-3.4-3.4V86c-3.2-0.2-6.8-0.4-10.1-1v9.4c0,1.7,1.4,3,3,3h23.3     c1.7,0,3-1.4,3-3v-9.4c-3.3,0.5-6.8,0.8-10,1V86.2z" />
						<path d="M88.8,73.7h-6.7v-2.2c0-2.4-1.9-4.3-4.3-4.3h-5.6c-2.4,0-4.3,1.9-4.3,4.3v2.2h-6.7c-1.7,0-3,1.4-3,3v4.7     c0,0.4,0.3,0.8,0.7,0.9c3,0.6,6.8,1.1,11.5,1.3c0-1.9,1.5-3.4,3.4-3.4h2.6c1.9,0,3.4,1.5,3.4,3.4c4.7-0.2,8.5-0.7,11.5-1.3     c0.4-0.1,0.7-0.4,0.7-0.9v-4.7C91.9,75.1,90.5,73.7,88.8,73.7z M78.7,73.7h-7.4v-2.2c0-0.5,0.4-0.9,0.9-0.9h5.6     c0.5,0,0.9,0.4,0.9,0.9V73.7z" />
						<path d="M76.3,87.2c0.5,0,1-0.4,1-1v-2.6c0-0.5-0.4-1-1-1h-2.6c-0.5,0-1,0.4-1,1v2.6c0,0.5,0.4,1,1,1H76.3z" />
						<path d="M54.7,34.9c6.2-1.4,11.2-6,13.2-12.1l2.5-7.5c0.9-2.7-0.8-5.7-3.7-6.2c-2.3-0.4-4.5,1.2-5.3,3.4l-2.5,7.5     c-0.9,2.8-3.2,4.9-6.1,5.6c-4.3,1-8.7,1.6-13.1,1.6H39c-4.4,0-8.8-0.5-13.1-1.6c-2.8-0.7-5.1-2.8-6.1-5.6l-2.5-7.5     c-0.7-2.2-3-3.8-5.3-3.4c-2.9,0.5-4.6,3.4-3.7,6.2l2.5,7.5c2,6,7,10.6,13.2,12.1c0.9,0.2,1.9,0.4,2.8,0.6l1.3,21l-3.1,35.6     c-0.2,2.3,1.2,4.6,3.5,5.2c2.9,0.7,5.6-1.3,5.9-4.2l2.8-32.3c0.1-1.1,1-2,2.1-2c1.1,0,2,0.9,2.1,2l2.8,32.3     c0.2,2.5,2.3,4.3,4.7,4.3c0.2,0,0.4,0,0.6,0c2.5-0.3,4.3-2.6,4.1-5.1l-3.1-35.8l1.3-21C52.8,35.3,53.8,35.2,54.7,34.9z M41.9,47     l-2.2,2.4c-0.2,0.2-0.5,0.2-0.7,0L36.9,47c-0.1-0.1-0.1-0.2-0.1-0.4l1.8-13h-0.8c-0.3,0-0.5-0.2-0.5-0.5v-2.7     c0-0.3,0.2-0.5,0.5-0.5h3.4c0.3,0,0.5,0.2,0.5,0.5v2.7c0,0.3-0.2,0.5-0.5,0.5h-0.8l1.8,13C42.1,46.7,42,46.9,41.9,47z" />
					</g>
				</svg>
				<div className="work_content">
					<h2>Work</h2>
					<h5>Explore Your Options to Work in Canada</h5>
					<p>
						Canada is a wonderful place to work and raise a family. Canada
						offers exciting career opportunities, a high quality education
						system for learners of all ages, a public health care system and
						good quality of life.
					</p>
				</div>

				<button>
					<a href="http://ecloudfile.com/assessment/CCP2019458">
						Do your assement here
					</a>
				</button>
			</div>
			<div className="work_description">
				<p>
					With over thousands of jobs created each month, Canada has a very low
					unemployment rate compared to other developed countries. Canada ranks
					high in modern technologies and is rapidly advancing, making this the
					best place for IT professionals and computer scientists.
					Telecommunications, pharmaceuticals, aerospace and engineering are
					some of the most popular industries in many cities around Canada. If
					you have a valid work permit, your spouse or common-law partner can
					work in Canada too. They will have to obtain their own work permit but
					will not need a job offer and may accept any job offer in Canada. Kids
					will be able to study for free at elementary and secondary schools,
					and all these factors will count in your favour when applying for
					permanent residency in Canada.
				</p>
				<h5 id="faq">FAQ</h5>
				<div
					onClick={() => {
						setisOpen1((prev) => !prev);
					}}
					className="work_question"
				>
					<h5>I am Looking for working In Canada </h5>
					{isOpen1 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
				</div>
				<Collapse in={isOpen1}>
					<div id="example-collapse-text">
						If you are looking for work in Canada or already have a job offer
						from a Canadian employer and are unsure of what to do next, we have
						the perfect tools to get you started. You may also wish to check out
						some of our great employment resources, such as our Job Search Tool,
						our Resume Builder, or our other Career Coaching Tools.
					</div>
				</Collapse>
				<div
					onClick={() => {
						setisOpen2((prev) => !prev);
					}}
					className="work_question"
				>
					<h5>I already Have a Job Offer </h5>
					{isOpen2 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
				</div>
				<Collapse in={isOpen2}>
					<div id="example-collapse-text">
						If you have a job offer from a Canadian employer and are unsure of
						what to do next, check out our Work Permit Services to get an
						introduction on what you need to acquire the proper authorizations
						to work in Canada. We would be happy to assist you with the process
						from beginning to end. Please contact us so we can help you explore
						your options.
					</div>
				</Collapse>
				<div
					onClick={() => {
						setisOpen3((prev) => !prev);
					}}
					className="work_question"
				>
					<h5>I am a Graduate and i will Like to Work after my Studies </h5>
					{isOpen3 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
				</div>
				<Collapse in={isOpen3}>
					<div id="example-collapse-text">
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
				</Collapse>
			</div>
		</div>
	);
};

export default styled(Work)`
	h5 {
		text-align: center;
		font-size: 16px;
	}
	.work_header {
		height: 300px;
		color: white;
		background-color: #e8a87c;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	svg {
		height: 300px;
		fill: white;
		margin-right: 3rem;
	}
	.MuiSvgIcon-root {
		position: absolute;
		height: 50px;
		top: 5px;
		right: -57%;
	}
	.work_content {
		flex: 0.3;
	}
	button {
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		color: #e8a87c;
		font-weight: bold;
		transition: background-color 0.3s ease;
		margin-left: 3rem;
		a {
			color: #e8a87c;
		}
	}
	button:hover {
		box-shadow: 0 0 10px #826767;
		color: white;
	}
	.work_description {
		width: 50%;
		margin: 3rem auto;
	}
	.work_question {
		background-color: #e8a87c;
		padding: 0.5rem;
		margin-bottom: 10px;
		box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
		color: white;
		border-radius: 5px;
		position: relative;
	}
	.collapse {
		background: #80808012;
		padding: 2rem;
		margin-bottom: 10px;
	}
	li {
		list-style: circle;
	}
	#faq {
		color: #e8a87c;
	}
	@media screen and (max-width: 800px) {
		h2 {
			text-align: center;
		}

		.work_description {
			width: 100%;
			padding: 3rem 0.5rem;
			text-align: justify;
		}
		.work_content {
			text-align: center;
		}
		.work_header {
			display: block;
			padding: 1rem;
			height: max-content;
		}
		svg {
			width: 100%;
		}
		button {
			width: 100%;
			margin-left: 0rem;
		}
	}
`;
