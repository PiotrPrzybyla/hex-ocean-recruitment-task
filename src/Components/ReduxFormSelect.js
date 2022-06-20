import React, { useState } from "react";
import Select from "react-select";
import Type from "./Type";

function ReduxFormSelect(props) {
	const { input, options } = props;
	const [chosenType, setChosenType] = useState(null);
	function chooseType(value) {
		setChosenType(value);
		return input.onChange(value);
	}
	return (
		<>
			<Select
				{...input}
				onChange={chooseType}
				onBlur={() => input.onBlur(input.value)}
				options={options}
			/>
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
