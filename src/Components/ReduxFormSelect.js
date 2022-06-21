import React, { useState } from "react";
import Select from "react-select";
import Type from "./Type";

function ReduxFormSelect(props) {
	const { input, options } = props;
	const [chosenType, setChosenType] = useState(null);
	const customStyles = {
		menu: (provided, state) => ({
			...provided,
			backgroundColor: "#555",
			color: "#efefef",
			padding: 5,
		}),
		option: (provided, state) => ({
			...provided,
			backgroundColor: "#555",
			color: state.isSelected ? "#efefef" : "#ababab",
			padding: 10,
		}),
		control: (provided, state) => ({
			...provided,
			backgroundColor: "#555",
			color: "#efefef",
		}),
		singleValue: (provided, state) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			const transition = "opacity 300ms";
			return { ...provided, opacity, transition, color: "#efefef" };
		},
	};
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
