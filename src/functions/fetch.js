import { reset } from "redux-form";
export async function sendToAPI(data) {
	const details = data.details;
	const dataToSend = {
		name: data.name,
		preparation_time: data.preparation_time,
		...details,
	};
	dataToSend.type = data.details.type.value;
	if (dataToSend.no_of_slices)
		dataToSend.no_of_slices = parseInt(dataToSend.no_of_slices);
	if (dataToSend.diameter)
		dataToSend.diameter = parseFloat(dataToSend.diameter);
	if (dataToSend.spiciness_scale)
		dataToSend.spiciness_scale = parseInt(dataToSend.spiciness_scale);
	if (dataToSend.slices_of_bread)
		dataToSend.slices_of_bread = parseInt(dataToSend.slices_of_bread);
	console.log(dataToSend);
	const config = {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(dataToSend),
	};
	const resp = await fetch(
		"https://frosty-wood-6558.getsandbox.com:443/dishes",
		config
	);
	const json = await resp.json();
	console.log(json);
	return json;
}
