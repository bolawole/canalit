import React, { useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function EduInfo(props) {
	const next = (e) => {
		e.preventDefault();
		props.nextStep();
	};

	const previous = (e) => {
		e.preventDefault();
		props.prevStep();
	};
	return (
		<MuiThemeProvider>
			<div className="eduinfo">
				<FormControl component="fieldset">
					<RadioGroup aria-label="gender" name="gender1">
						<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
						<FormControlLabel value="No" control={<Radio />} label="No" />
					</RadioGroup>
				</FormControl>

				<TextField
					type="number"
					hintText="Total Years of education"
					floatingLabelText="Total Years of education"
				/>
				<FormControl>
					<InputLabel>Certificate</InputLabel>

					<Select>
						<option value="No formal education">No formal education</option>
						<option value="Primary education">Primary education</option>

						<option value="Secondary education">
							Secondary education or high school
						</option>
						<option value="GED">GED</option>

						<option value="Vocational qualification">
							Vocational qualification
						</option>
						<option value="Bachelor's degree">Bachelor's degree</option>
						<option value="Master's degree">Master's degree</option>
						<option value="Doctorate or higher">Doctorate or higher</option>
					</Select>
				</FormControl>
				<TextField
					type="text"
					hintText="Field of Study"
					floatingLabelText="Field of Study"
				/>
				<TextField
					type="text"
					hintText="Name of Institution"
					floatingLabelText="Name of Institution"
				/>
				<TextField type="text" hintText="City" floatingLabelText="City" />
				<TextField type="text" hintText="Country" floatingLabelText="Country" />
				<RaisedButton onClick={previous} primary={true} label="Previous" />
				<RaisedButton onClick={next} label="Next" />
			</div>
		</MuiThemeProvider>
	);
}

export default EduInfo;
