import React, { useState } from "react";
import Type from "./Type";
import { useEffect } from "react";
import { reduxForm, Field, FormSection } from "redux-form";

function Form(props) {
	const [chosenType, setChosenType] = useState(null);
	function chooseType(e) {
		e.preventDefault();
		setChosenType(e.target.value);
	}
	function sendToAPI(data) {
		console.log(data);
	}
	return (
		<form onSubmit={props.handleSubmit(sendToAPI)}>
			<Field component="input" placeholder="name" name="name" />
			<Field
				name="preparation_time"
				component="input"
				type="time"
				step="1"
				placeholder="preparation time"
			/>
			<Field component="select" name="type" id="" onChange={chooseType}>
				<option value={null}></option>
				<option value="Pizza">Pizza</option>
				<option value="Soup">Soup</option>
				<option value="Sandwich">Sandwich</option>
			</Field>
			<FormSection name="details">
				<Type type={chosenType}></Type>
			</FormSection>

			{!chosenType ? <></> : <button type="submit">Submit</button>}
		</form>
	);
}

export default reduxForm({
	form: "app-form",
})(Form);
