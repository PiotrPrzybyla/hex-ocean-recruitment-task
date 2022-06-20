import React from "react";
import { Field } from "redux-form";

function Soup() {
	return (
		<Field
			name="spiciness"
			component="input"
			type="number"
			min={0}
			max={10}
			placeholder="Spiciness Scale"
		/>
	);
}

export default Soup;
