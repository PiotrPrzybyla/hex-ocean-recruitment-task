import React, { useState } from "react";
import Type from "./Type";
import { reduxForm, Field, FormSection } from "redux-form";
import { sendToAPI } from "../functions/fetch";
import ReduxFormSelect from "./ReduxFormSelect";
import "./Form.css";
function Form(props) {
	const [isFetched, setIsFetched] = useState(false);
	function handleSubmit(data) {
		sendToAPI(data);
		setIsFetched(true);
	}
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
	if (isFetched) return <div></div>;
	else
		return (
			<form onSubmit={props.handleSubmit(handleSubmit)}>
				<label htmlFor="name">Name</label>
				<Field component="input" name="name" required />
				<label htmlFor="preparation_time">Preparation Time</label>
				<Field
					required
					name="preparation_time"
					component="input"
					type="time"
					step="1"
				/>
				<label htmlFor="details">Type</label>
				<FormSection name="details">
					<Field name="type" component={ReduxFormSelect} options={options} />
				</FormSection>
			</form>
		);
}

export default reduxForm({
	form: "app-form",
})(Form);
