import React from "react";
import { Field } from "redux-form";

function Soup() {
	return (
		<>
			<label htmlFor="spiciness_scale">Spiciness Scale</label>
			<Field
				required
				name="spiciness_scale"
				component="input"
				type="number"
				min={0}
				max={10}
			/>
		</>
	);
}

export default Soup;
