import React from "react";
import { Field } from "redux-form";

function Pizza() {
	return (
		<>
			<Field
				required
				name="no_of_slices"
				component="input"
				type="number"
				placeholder="Number of slices"
			/>
			<Field
				required
				name="diameter"
				component="input"
				type="number"
				placeholder="diameter"
			/>
		</>
	);
}

export default Pizza;
