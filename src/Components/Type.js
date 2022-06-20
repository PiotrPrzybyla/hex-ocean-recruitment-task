import React from "react";
import Pizza from "./Pizza";
import Soup from "./Soup";
import Sandwich from "./Sandwich";
function Type(props) {
	if (props.type === "Pizza") return <Pizza></Pizza>;
	else if (props.type === "Soup") return <Soup></Soup>;
	else if (props.type === "Sandwich") return <Sandwich></Sandwich>;
	else return <></>;
}

export default Type;
