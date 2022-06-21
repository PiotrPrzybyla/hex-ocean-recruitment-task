import React, { useState } from "react";
import Type from "./Type";
import { reduxForm, Field, FormSection } from "redux-form";
import { sendToAPI } from "../functions/fetch";
import ReduxFormSelect from "./ReduxFormSelect";
import "./Form.css";
function Form(props) {
	const options = [
		{
			label: "Pizza",
			value: "pizza",
		},
		{
			label: "Soup",
			value: "soup",
		},
		{
			label: "Sandwich",
			value: "sandwich",
		},
	];
	return (
		<form onSubmit={props.handleSubmit(sendToAPI)}>
			<Field component="input" placeholder="name" name="name" required />
			<Field
				required
				name="preparation_time"
				component="input"
				type="time"
				step="1"
				placeholder="preparation time"
			/>
			<FormSection name="details">
				<Field name="type" component={ReduxFormSelect} options={options} />
			</FormSection>
		</form>
	);
}

export default reduxForm({
	form: "app-form",
})(Form);
