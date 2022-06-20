import React from "react";
import Pizza from "./Pizza";
import Soup from "./Soup";
import Sandwich from "./Sandwich";
function Type(props) {
	if (props.type === "pizza") return <Pizza></Pizza>;
	else if (props.type === "soup") return <Soup></Soup>;
	else if (props.type === "sandwich") return <Sandwich></Sandwich>;
	else return <></>;
}

export default Type;
