import React from "react";
import styled from "styled-components";
function Testimony({ className }) {
	return (
		<div className={className}>
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
			<TestimonySLider>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt in
					esse debitis eos sed. Ut nostrum magnam eos assumenda, dignissimos a
					dolores explicabo illo facere sit, natus eius molestias nobis
					cupiditate facilis libero culpa laborum ea? Quam consequatur dolorum
					optio eos fugit harum. Rem nesciunt qui quia, sint unde quae
					repudiandae error provident, nobis sunt earum optio adipisci corrupti!
					Sapiente molestias quos recusandae nemo atque eos. Quod molestiae
					provident sit alias eius. Beatae temporibus nesciunt iure saepe vitae
					error vel, deleniti debitis nobis quisquam numquam at voluptatibus
					quod sequi eaque! Obcaecati veniam temporibus voluptate labore commodi
					ipsa fugit voluptas ut.
				</p>

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
		</div>
	);
}

const TestimonySLider = styled.div`
	width: 50%;
	margin: 5rem auto;
	padding: 3rem;
	min-height: min-content;
`;
export default styled(Testimony)`
	position: relative;
	.svg1 {
		fill: white;
		height: 60px;
		width: 60px;
		background: #041c3a;
		padding: 10px;
		border-radius: 50%;

		position: absolute;
		top: 0;
	}
	.svg2 {
		transform: scaleX(-1);
		fill: white;
		height: 60px;
		width: 60px;
		background: #041c3a;
		padding: 10px;
		border-radius: 50%;

		position: absolute;
		bottom: 0;
	}
`;
