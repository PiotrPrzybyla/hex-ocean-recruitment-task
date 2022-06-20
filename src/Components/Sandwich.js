import React from "react";
import { Field } from "redux-form";

function Sandwich() {
	return (
		<Field
			name="slices"
			component="input"
			type="number"
			placeholder="Slices of Bread"
		/>
	);
}

export default Sandwich;
