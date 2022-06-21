import React from "react";
import { Field } from "redux-form";

function Sandwich() {
	return (
		<>
			<label htmlFor="slices_of_bread">Slices of Bread</label>
			<Field required name="slices_of_bread" component="input" type="number" />
		</>
	);
}

export default Sandwich;
