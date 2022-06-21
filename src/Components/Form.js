import React, { useState } from "react";
import Result from "./Result";
import { reduxForm, Field, FormSection } from "redux-form";
import { sendToAPI } from "../functions/fetch";
import ReduxFormSelect from "./ReduxFormSelect";
import { options } from "../functions/SelectForm";
import "./Form.css";
function Form(props) {
	const [dish, setDish] = useState(null);
	const [status, setStatus] = useState(null);
	function handleSubmit(data) {
		const APIPromise = sendToAPI(data);
		// setDish(APIPromise.json());
		APIPromise.then((json) => {
			setStatus(json[1]);
			setDish(json[0]);
		});
	}
	function backToForm() {
		setDish(null);
		window.location.reload(true);
	}
	if (dish)
		return (
			<section className="result">
				<Result dish={dish} status={status}></Result>
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
