import React from "react";
import { Field } from "redux-form";

function Soup() {
	return (
		<Field
			required
			name="spiciness_scale"
			component="input"
			type="number"
			min={0}
			max={10}
			placeholder="Spiciness Scale"
		/>
	);
}

export default Soup;
