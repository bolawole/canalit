import React, { useState } from "react";

import Personalinfo from "./Personalinfo";
import EduInfo from "./EduInfo";

function Eligibility() {
	const [step, setStep] = useState(1);

	const nextStep = () => {
		setStep(step + 1);
	};
	const prevStep = () => {
		setStep(step - 1);
	};

	switch (step) {
		case 1:
			return (
				<div className="eligible">
					<Personalinfo step={step} nextStep={nextStep} />
				</div>
			);
		case 2:
			return (
				<div className="eligible">
					<EduInfo step={step} nextStep={nextStep} prevStep={prevStep} />
				</div>
			);
		case 3:
			return <h1>confirm</h1>;
		case 4:
			return <h1>confirm</h1>;
	}
}

export default Eligibility;
