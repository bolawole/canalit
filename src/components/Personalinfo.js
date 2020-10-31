import React, { useState } from "react";
import "../css/personal.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

import {
	CountryDropdown,
	RegionDropdown,
	CountryRegionData,
} from "react-country-region-selector";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

function Personalinfo(props) {
	const classes = useStyles();
	// initialize all state here
	const [country, setCountry] = useState("");
	const [maritalStatus, setMarital] = useState({
		value: "",
	});
	//-----End Initialization------------

	//---------update all state here---------
	const updateCountry = (val) => {
		setCountry(val);
	};

	const updateMaritalStatus = (e) => {
		setMarital({
			value: e.target.value,
		});
	};

	const next = (e) => {
		e.preventDefault();
		props.nextStep();
	};
	//-------------End Update---------------

	return (
		<MuiThemeProvider>
			<div className="personal">
				<TextField
					type="text"
					hintText="Your First Name"
					floatingLabelText="First Name"
				/>
				<TextField
					type="text"
					hintText="Your Last Name"
					floatingLabelText="Last Name"
				/>
				<TextField
					type="number"
					hintText="Age"
					floatingLabelText="Age"
					min="0"
					max="100"
				/>
				<TextField
					type="email"
					hintText="Your email"
					floatingLabelText="Email"
				/>
				<TextField
					type="email"
					hintText="Confirm Email"
					floatingLabelText="confirm email"
				/>

				<TextField>
					<CountryDropdown
						value={country}
						onChange={(val) => updateCountry(val)}
					/>
				</TextField>
				<FormControl className={classes.formControl}>
					<InputLabel>Marital Status</InputLabel>

					<Select onChange={updateMaritalStatus} value={maritalStatus.value}>
						<option value="Single">Unmarried,Single</option>
						<option value="Divorced,widowed">Divorced,Widowed</option>
						<option value="Married">Married</option>
						<option value="Legally Separated">Legally Separated</option>
						<option value="Common Law">Common Law</option>
					</Select>
				</FormControl>

				<RaisedButton label="NEXT" primary={true} onClick={next} />
			</div>
		</MuiThemeProvider>

		// <div className="personal">
		// 	<div className="personal_header">
		// 		<i className="fas fa-user"></i>
		// 		<h2>Personal Info</h2>
		// 	</div>
		// 	<form onSubmit={submitForm} action="">
		// 		<input className="form-control" type="text" placeholder="Name" />
		// 		<input className="form-control" type="email" placeholder="email" />
		// 		<input
		// 			className="form-control"
		// 			type="email"
		// 			placeholder="confirm email"
		// 		/>
		// 		<input
		// 			className="form-control"
		// 			placeholder="age"
		// 			type="number"
		// 			min="0"
		// 			max="100"
		// 		/>

		// 		{/* Options */}

		// 		<CountryDropdown
		// 			className="form-control"
		// 			value={country}
		// 			onChange={(val) => updateCountry(val)}
		// 		/>
		// 		<select
		// 			className="form-control"
		// 			value={maritalStatus.value}
		// 			onChange={updateMaritalStatus}
		// 		>
		// 			<option value="" disabled hidden>
		// 				Marital Status
		// 			</option>
		// 			<option value="Single">Unmarried,Single</option>
		// 			<option value="Divorced,widowed">Divorced,Widowed</option>
		// 			<option value="Married">Married</option>
		// 			<option value="Legally Separated">Legally Separated</option>
		// 			<option value="Common Law">Common Law</option>
		// 		</select>
		// 		<select
		// 			className="form-control"
		// 			value={maritalStatus.value}
		// 			onChange={updateMaritalStatus}
		// 		>
		// 			<option value="" disabled hidden>
		// 				Education
		// 			</option>
		// 			<option value="No formal education">No formal education</option>
		// 			<option value="Primary education">Primary education</option>
		// 			<option value="Secondary education">
		// 				Secondary education or high school
		// 			</option>
		// 			<option value="GED">GED</option>
		// 			<option value="Vocational qualification">
		// 				Vocational qualification
		// 			</option>
		// 			<option value="Bachelor's degree">Bachelor's degree</option>
		// 			<option value="Master's degree">Master's degree</option>
		// 			<option value="Doctorate or higher">Doctorate or higher</option>
		// 		</select>
		// 		<select
		// 			className="form-control"
		// 			value={maritalStatus.value}
		// 			onChange={updateMaritalStatus}
		// 		>
		// 			<option value="" disabled hidden>
		// 				Employment Status
		// 			</option>{" "}
		// 			<option value="Employed">Employed</option>
		// 			<option value="Self-employed">Self-employed</option>
		// 			<option value="Out of work">Out of work</option>
		// 			<option value="Homemaker">Homemaker</option>
		// 			<option value="Student">Student</option>
		// 			<option value="Retired">Retired</option>
		// 			<option value="Unable to work">Unable to work</option>
		// 		</select>
		// 		{/* -------------options select------------ */}
		// 	</form>
		// </div>
	);
}

export default Personalinfo;
