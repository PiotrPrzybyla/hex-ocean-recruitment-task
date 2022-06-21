import React from "react";

function Result(props) {
	const dish = props.dish;
	return (
		<>
			{props.status === 200 ? <></> : <h1>Error {props.status}</h1>}
			{dish.name === undefined ? (
				<></>
			) : (
				<div>
					<p>Name: {dish.name}</p>
				</div>
			)}

			{dish.preparation_time === undefined ? (
				<></>
			) : (
				<div>
					<p>Preparation Time: {dish.preparation_time}</p>
				</div>
			)}

			{dish.type === undefined ? (
				<></>
			) : (
				<div>
					<p>Type: {dish.type}</p>
				</div>
			)}

			{dish.no_of_slices === undefined ? (
				<></>
			) : (
				<div>
					<p>Number of slices: {dish.no_of_slices}</p>
				</div>
			)}

			{dish.diameter === undefined ? (
				<></>
			) : (
				<div>
					<p>Diameter: {dish.diameter}</p>
				</div>
			)}

			{dish.spiciness_scale === undefined ? (
				<></>
			) : (
				<div>
					<p>Spiciness Scale: {dish.spiciness_scale}</p>
				</div>
			)}

			{dish.slices_of_bread === undefined ? (
				<></>
			) : (
				<div>
					<p>Slices of Bread: {dish.slices_of_bread}</p>
				</div>
			)}
		</>
	);
}

export default Result;
