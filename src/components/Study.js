import React from "react";
import Card from "./Card";
import styled from "styled-components";

function Study({ className }) {
	const steps = [
		{
			title: "select a program",
			content:
				"Find a program the best suit your career and interest, Find out more by filling the assemement",
		},
		{
			title: "Apply to a DLI ",
			content:
				" Once you have determined which education program to apply to, we will help you prepare and submit your application to the Canadian designated learning institution (DLI) of your choice",
		},
		{
			title: "Apply For Study Permit",
			content:
				"Upon obtaining a letter of acceptance, we can help you submit an application to the Government of Canada for a study permit. The study permit is a document that most people need so they can legally remain in Canada as a student.",
		},
	];
	return (
		<div className={className}>
			<div className="study_header">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					x="0px"
					y="0px"
					viewBox="0 0 69 86.25"
					style={{ enableBackground: "new 0 0 69 69" }}
				>
					<g>
						<path d="M48.45483,23.38296c2.77441-2.77721,2.55768-7.40906-0.35187-10.31549l-0.00488-0.00488   c-2.90901-2.90615-7.54038-3.11973-10.31586-0.34137l-1.5636,1.56519L46.8858,24.95358L48.45483,23.38296z" />
						<path d="M50.43213,14.59933c0.10085-0.10085,1.6808-1.68087,1.57996-1.58002c1.08714-1.11418,1.04269-2.84845,0-3.85999V9.14932   c-1.0741-1.0866-2.81386-1.04613-3.87,0.01001l-1.58002,1.57001c0.83002,0.41998,1.58002,0.97003,2.24005,1.63   C49.47211,13.01931,50.02209,13.77932,50.43213,14.59933z" />
						<path d="M39.20209,21.96932c1.01001,1.01001,2.54999,1.15002,3.71002,0.42999l-4.13-4.13   C38.06852,19.37432,38.16708,20.91645,39.20209,21.96932z" />
						<path d="M38.32208,47.68936h16.61005v-0.84003c0-1.10999-0.89001-2-2-2H40.32208c-1.09998,0-2,0.89001-2,2V47.68936z" />
						<path d="M44.48212,43.84933c-0.16003-0.60999-0.73004-1.06-1.39001-1.06c-0.40002,0-0.77002,0.16998-1.03003,0.41998   c-0.16998,0.18005-0.29999,0.40002-0.37,0.64001H44.48212z" />
						<path d="M39.65363,25.1249l-0.96484,2.62354c-0.09473,0.25879,0.03809,0.54639,0.29688,0.6416   c0.26374,0.09611,0.54764-0.04104,0.64258-0.29688l0.96484-2.62354c0.09473-0.25879-0.03809-0.54639-0.29688-0.6416   C40.03741,24.73477,39.75031,24.86465,39.65363,25.1249z" />
						<path d="M36.88116,23.58438l-1.79492,1.79443c-0.19531,0.19531-0.19531,0.51172,0,0.70703   c0.19531,0.19531,0.51171,0.19532,0.70703,0l1.79492-1.79443c0.19531-0.19531,0.19531-0.51172,0-0.70703   S37.07648,23.38906,36.88116,23.58438z" />
						<path d="M33.42413,22.48281l2.62402-0.96484c0.25879-0.09521,0.3916-0.38281,0.29688-0.6416   c-0.09668-0.25977-0.38086-0.3916-0.64258-0.29688l-2.62402,0.96484c-0.25879,0.09521-0.3916,0.38281-0.29688,0.6416   C32.87656,22.44195,33.16058,22.57885,33.42413,22.48281z" />
						<path d="M51.51208,14.93936l8.67999,10.45996c0.42535-0.87406,1.29269-1.65636,2.46002-1.92999l-9.12-10.95996   c-0.17999,0.44-0.45001,0.84998-0.79999,1.20996L51.51208,14.93936z" />
						<path d="M63.50354,24.3663c-1.22034,0-2.26791,0.81673-2.59283,1.8999c-0.35129,1.02461-0.01719,2.27366,0.96118,3.0249   c1.78917,1.32014,4.36603,0.05917,4.36603-2.19794C66.23792,25.58822,65.01599,24.3663,63.50354,24.3663z" />
						<path d="M61.2821,30.09933c-0.42999-0.33002-0.78998-0.73999-1.03998-1.20001l-12.31,14.95001h4.15997l10.66998-13.08997   C62.22211,30.64932,61.72211,30.42935,61.2821,30.09933z" />
						<path d="M10.66211,26.05398c0,3.34526,1.68047,6.40762,4.45001,8.16998l-1.13,1.91003h1.15997l0.83002-1.41003   c1.33409,0.74146,2.93249,1.10004,4.46002,1.10004c1.75257,0,3.41203-0.44935,4.95996-1.36005l0.96002,1.67004h1.14996   l-1.27997-2.23004c2.20925-1.47208,3.97998-4.4898,3.97998-7.84998c0-4.9282-3.75038-9.41917-9.26996-9.75v-1h0.69   c0.26996,0,0.5-0.22003,0.5-0.5c0-0.27002-0.23004-0.5-0.5-0.5h-2.38c-0.28003,0-0.5,0.22998-0.5,0.5   c0,0.27997,0.21997,0.5,0.5,0.5h0.69v1C14.58122,16.6184,10.66211,20.9541,10.66211,26.05398z M14.9021,21.22396   c0.19,0.20001,0.51001,0.20001,0.70001,0c0.20001-0.19,0.20001-0.51001,0-0.70001l-0.45001-0.45996   c1.47204-1.25563,3.06691-1.87978,4.78003-1.97003v0.64001c0,0.27002,0.21997,0.5,0.5,0.5c0.26996,0,0.5-0.22998,0.5-0.5v-0.64001   c1.72389,0.09083,3.3646,0.73075,4.76996,1.98004l-0.45001,0.44995c-0.19,0.19-0.19,0.51001,0,0.70001   c0.20001,0.20001,0.51001,0.20001,0.71002,0l0.45001-0.45001c1.22466,1.39657,1.85861,2.9593,1.97998,4.78003h-0.64001   c-0.27997,0-0.5,0.21997-0.5,0.5c0,0.27002,0.22003,0.5,0.5,0.5h0.64001c-0.10999,1.78998-0.81,3.45001-1.97998,4.77002   l-0.45001-0.45001c-0.20001-0.20001-0.51001-0.20001-0.71002,0c-0.19,0.20001-0.19,0.51001,0,0.70996l0.45001,0.45001   c-1.49283,1.26295-3.03374,1.87659-4.76996,1.97003v-0.63c0-0.28003-0.23004-0.5-0.5-0.5c-0.28003,0-0.5,0.21997-0.5,0.5v0.63   c-1.88788-0.10159-3.39025-0.79426-4.78003-1.97003l0.45001-0.45001c0.20001-0.19995,0.20001-0.50995,0-0.70996   c-0.19-0.20001-0.51001-0.20001-0.70001,0L14.44208,31.324c-1.16998-1.32001-1.85999-2.98004-1.96997-4.77002h0.64001   c0.26996,0,0.5-0.22998,0.5-0.5c0-0.28003-0.23004-0.5-0.5-0.5h-0.64001c0.09766-1.7388,0.7463-3.37889,1.97998-4.78003   L14.9021,21.22396z" />
						<path d="M20.42902,26.55117h2.98145c0.27637,0,0.5-0.22363,0.5-0.5s-0.22363-0.5-0.5-0.5h-2.48145v-3.09082   c0-0.27637-0.22363-0.5-0.5-0.5s-0.5,0.22363-0.5,0.5v3.59082C19.92902,26.32754,20.15265,26.55117,20.42902,26.55117z" />
						<path d="M15.08209,16.71395c-0.48999-0.39996-1.12-0.63995-1.81-0.63995c-1.60999,0-2.90997,1.29999-2.90997,2.89996   c0,0.70001,0.25,1.34003,0.65997,1.84003C12.00578,19.03662,13.53356,17.55869,15.08209,16.71395z" />
						<path d="M29.77209,20.71395c0.37-0.48999,0.58002-1.08997,0.58002-1.73999c0-1.59998-1.31-2.89996-2.91003-2.89996   c-0.65997,0-1.25995,0.21997-1.75,0.59998C26.69932,17.0765,28.66974,18.75706,29.77209,20.71395z" />
						<path d="M11.64288,41.91104c5.97641,0,11.16523,0,20.66797,0c-0.79959-1.45948-0.86398-3.07453,0.03613-4.77832h-20.7041   c-1.31738,0-2.38867,1.07178-2.38867,2.38916C9.25421,40.80416,10.28734,41.91104,11.64288,41.91104z M25.60773,38.92129h2.80859   c0.27637,0,0.5,0.22363,0.5,0.5s-0.22363,0.5-0.5,0.5h-2.80859c-0.27637,0-0.5-0.22363-0.5-0.5   S25.33136,38.92129,25.60773,38.92129z M13.18097,38.92129h9.68945c0.27637,0,0.5,0.22363,0.5,0.5s-0.22363,0.5-0.5,0.5h-9.68945   c-0.27638,0-0.5-0.22363-0.5-0.5S12.90459,38.92129,13.18097,38.92129z" />
						<path d="M9.67609,47.68936h20.66797c1.37773,0,2.38867-1.132,2.38867-2.38916c0-1.31738-1.07129-2.38916-2.38867-2.38916   c-5.11698,0-15.51249,0-20.70508,0C10.51623,44.56728,10.50064,46.18655,9.67609,47.68936z M18.72687,44.92129h9.68945   c0.27637,0,0.5,0.22363,0.5,0.5s-0.22363,0.5-0.5,0.5h-9.68945c-0.27637,0-0.5-0.22363-0.5-0.5S18.4505,44.92129,18.72687,44.92129   z M13.18097,44.92129h2.80957c0.27637,0,0.5,0.22363,0.5,0.5s-0.22363,0.5-0.5,0.5h-2.80957c-0.27638,0-0.5-0.22363-0.5-0.5   S12.90459,44.92129,13.18097,44.92129z" />
						<rect x="14.9621" y="48.68936" width="40.97003" height="5.47998" />
						<rect x="14.9621" y="55.16934" width="40.97003" height="5.47998" />
						<path d="M59.99213,48.68936h-3.06v11.95996h3.06c1.72998,0,3.13995-1.42999,3.13995-3.19v-5.57996   C63.13208,50.11935,61.72211,48.68936,59.99213,48.68936z" />
						<path d="M2.76208,54.66934c0,0.19,0.11005,0.35999,0.28003,0.44l10.91998,5.35217V48.87637L3.04211,54.21933   C2.87213,54.29934,2.76208,54.46933,2.76208,54.66934z" />
					</g>
				</svg>
				<div className="study_content">
					<h2>Study</h2>
					<h5>Fulfill Your Dream of Studying in Canada</h5>
					<p>
						Canada is a wonderful place to work and raise a family. Canada
						offers exciting career opportunities, a high quality education
						system for learners of all ages, a public health care system and
						good quality of life.
					</p>
				</div>

				<button>Do your assement here</button>
			</div>
			<div className="study_section1">
				<h3>Why Choose Canada?</h3>
				<p>
					Choose to study in Canada, and you’ll have the opportunity to
					encounter vastly different cultural and natural experiences – from the
					ski slopes of British Columbia to the prairie province of Manitoba,
					with cities such as Toronto, Montréal, Vancouver and Quebec famously
					friendly, tolerant and multicultural.
				</p>
				<p>
					Occupying the northern half of the North American continent, Canada is
					known for its natural beauty – few nations in the world can boast
					anything close to its wealth of forests, lakes and mountains – and for
					its multicultural diversity. The country has official bilingual
					status, with English and French used concurrently in government and
					official documents.
				</p>
			</div>
			<div className="study_section2">
				<h3>How to Get Started</h3>
				<div className="study_section2steps">
					{steps.map((each_step) => {
						return (
							<Card
								title={each_step.title}
								content={each_step.content}
								color="#c38d9e"
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default styled(Study)`
	.study_header {
		height: 300px;
		color: white;
		background-color: #c38d9e;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	svg {
		height: 300px;
		fill: white;
		margin-right: 3rem;
	}
	.study_content {
		flex: 0.3;
	}
	.study_section1,
	.study_section2 {
		width: 50%;
		text-align: justify;
		margin: 5rem auto;
		h3 {
			color: #808080bf;
			margin-bottom: 3rem;
		}
	}
	.study_section2steps {
		display: flex;

		justify-content: space-evenly;
	}
	button {
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		color: #c38d9e;
		font-weight: bold;
		transition: background-color 0.3s ease;
		margin-left: 3rem;
	}
	button:hover {
		background-color: red;
		color: white;
	}
	@media screen and (max-width: 800px) {
		width: 100%;
		padding: 1rem;
		text-align: justify;
		.study_section1,
		.study_section2 {
			margin-top: 3rem;
			width: 100%;
			h3 {
				margin-bottom: 3rem;
				text-align: center;
			}
		}
		.study_section2steps {
			display: block;
			margin: 1rem auto;
		}

		h2 {
			text-align: center;
		}
		.study_description {
			width: 100%;
			padding: 3rem 0.5rem;
			text-align: justify;
		}
		.study_header {
			display: block;
			padding: 1rem;
			height: max-content;
		}
		svg {
			width: 100%;
		}
	}
`;
