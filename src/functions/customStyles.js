export const customStyles = {
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
		fontSize: 20,
	}),
	singleValue: (provided, state) => {
		const opacity = state.isDisabled ? 0.5 : 1;
		const transition = "opacity 300ms";
		return { ...provided, opacity, transition, color: "#efefef" };
	},
};
