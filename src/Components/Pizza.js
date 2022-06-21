import React from "react";
import { Field } from "redux-form";

function Pizza() {
	return (
		<>
			<label htmlFor="no_of_slices">Number of slices</label>
			<Field required name="no_of_slices" component="input" type="number" />
			<label htmlFor="diameter">Diameter</label>
			<Field required name="diameter" component="input" type="number" />
		</>
	);
}

export default Pizza;
