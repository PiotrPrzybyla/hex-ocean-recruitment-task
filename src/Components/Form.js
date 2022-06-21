import React, { useState } from "react";
import Type from "./Type";
import Result from "./Result";
import { reduxForm, Field, FormSection } from "redux-form";
import { sendToAPI } from "../functions/fetch";
import ReduxFormSelect from "./ReduxFormSelect";
import "./Form.css";
import "./Result.css";
function Form(props) {
	const [dish, setDish] = useState(null);
	function handleSubmit(data) {
		const APIPromise = sendToAPI(data);
		APIPromise.then((json) => {
			console.log(json);
			setDish(json);
		});
	}
	function backToForm() {
		setDish(null);
		window.location.reload(true);
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
	if (dish)
		return (
			<section className="result">
				<Result dish={dish}></Result>
				<button onClick={backToForm}>Back</button>
			</section>
		);
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
