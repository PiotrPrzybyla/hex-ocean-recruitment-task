import React from "react";
import { Field } from "redux-form";

function Sandwich() {
	return (
		<Field
			required
			name="slices_of_bread"
			component="input"
			type="number"
			placeholder="Slices of Bread"
		/>
	);
}

export default Sandwich;
