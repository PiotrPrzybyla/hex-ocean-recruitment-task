import React from "react";
import { Field } from "redux-form";

function Pizza() {
	return (
		<>
			<Field
				name="slices"
				component="input"
				type="number"
				placeholder="Number of slices"
			/>
			<Field
				name="diameter"
				component="input"
				type="number"
				placeholder="diameter"
			/>
		</>
	);
}

export default Pizza;
