import React, { useState } from "react";
import Select from "react-select";
import Type from "./Type";
import { customStyles } from "../functions/customStyles";

function ReduxFormSelect(props) {
	const { input, options } = props;
	const [chosenType, setChosenType] = useState(null);

	function chooseType(value) {
		setChosenType(value);
		return input.onChange(value);
	}
	return (
		<>
			<div className="select">
				<Select
					{...input}
					styles={customStyles}
					onChange={chooseType}
					onBlur={() => input.onBlur(input.value)}
					options={options}
				/>
			</div>
			{!chosenType ? (
				<></>
			) : (
				<>
					<Type type={chosenType.value}></Type>
					<button type="submit">Submit</button>
				</>
			)}
		</>
	);
}

export default ReduxFormSelect;
