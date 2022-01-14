import "./App.css";
import React from "react";
import { useState } from "react";
import {
	affichageAction,
	resetAction,
	resetNumberAction,
	symbolAction,
	replaceNumberAction,
	replaceSymbolAction,
} from "./action";
import { connect } from "react-redux";

function App(props) {
	const [affichage, setAffichage] = useState("");
	const [count, setCount] = useState(1);
	//Afficher tout sauf le egale et le AC
	//concatener les nombres lors du click
	//placer les contraintes(sur la chaine => dans l'action) avant les opérations

	function handleNumber(e) {
		e.preventDefault();
		setCount(1);
		let value = e.target.outerText;
		let firstValue = props.tabNumber[0];

		if (value !== "=") {
			for (let i of ["+", "-", "*", "/"]) {
				if (firstValue === i) props.replaceNumber();
			}

			//CONTRAINTE DAFFICHAGE
			if (props.tabNumber[0] === "0" && value === "0") return;

			for (let i of props.tabNumber) {
				if (i === "." && value === ".") return;
			}

			props.affichage(value);
		} else {
			props.symbol(parseFloat(props.tabNumber.join(""))); // envoie de la valeur dans le tableau final
		}
		// setAffichage(e.target.outerText);
		// console.log(e.target.outerText);
		// if (localStorage.number) localStorage.number += affichage;
		// else localStorage.setItem("number", affichage);
	}

	//le symbol (-) peut suivre tout autre symbole et on ce limite a 02 symboles max
	//si un symbole autre que le moins (-) est appuyé une seconde ou une 3eme fois remplacé le(s) symbol(s) par celui ci

	function finSymbol(val) {
		props.resetNumber();
		props.affichage(val);
	}

	function handleSymbol(e) {
		e.preventDefault();
		let value = e.target.outerText;
		setCount(count + 1);
		console.log(props.tabFinal);

		//props.tabFinal.concat(props.tabNumber.join("")); GRAVE ERREUR ON NE PEUT PAS CHANGER LETAT A CE NIVEAU IL EST DISPONIBLE QUEN LECTURE

		if (parseFloat(props.tabNumber.join(""))) {
			props.symbol(parseFloat(props.tabNumber.join("")));

			props.symbol(value); //1ere entré tabFinal[152 , "+" ]
		}
		console.log(props.tabFinal);
		console.log(props.tabFinal.length);
		if (count > 1) {
			//entre la 2eme et 3eme fois

			//si l'avant dernier est un symbol et la valeur === -
			if (
				!parseFloat(props.tabFinal[props.tabFinal.length - 2]) &&
				value === "-"
			) {
				finSymbol(value);
				return;
			}

			//si l'avant dernier est un symbol et valeur !== -
			if (
				!parseFloat(props.tabFinal[props.tabFinal.length - 2]) &&
				value !== "-"
			) {
				props.replaceSymbol();
				props.replaceSymbol();
				props.symbol(value);
				finSymbol(value);
				return;
			}
			//si lavant dernier n'est pas un symbole ,le dernier est un symbole et la valeur != -
			if (
				parseFloat(props.tabFinal[props.tabFinal.length - 2]) &&
				!parseFloat(props.tabFinal[props.tabFinal.length - 1]) &&
				value !== "-"
			) {
				props.replaceSymbol();
				props.symbol(value);
				finSymbol(value);
				return;
			}
			//si l'avant dernier n'est pas un symbole , le dernier est un symbole et la valeur === -
			if (
				parseFloat(props.tabFinal[props.tabFinal.length - 2]) &&
				!parseFloat(props.tabFinal[props.tabFinal.length - 1]) &&
				value === "-"
			) {
				finSymbol(value);
				props.symbol(value);
				console.log(props.tabFinal);
				console.log("im in");
				return;
			}
		}
		finSymbol(value);
		console.log(props.tabFinal);
	}

	function handleEqual(e) {
		e.preventDefault();
		props.symbol(e.target.outerText);
		//props.symbol(parseFloat(props.tabNumber.join("")));
		console.log(props.tabFinal);

		//console.log(eval(props.tabFinal.join("")));
		//setAffichage(eval(props.tabFinal.join("")));

		//props.reset();
	}
	let display;
	if (props.tabNumber.length) {
		display = (
			<div className="affichage" id="display">
				{props.tabNumber.join("")}
			</div>
		);
	} else if (affichage) {
		display = (
			<div className="affichage" id="display">
				{affichage}
			</div>
		);
	} else {
		display = (
			<div className="affichage" id="display">
				0
			</div>
		);
	}
	return (
		<div className="App">
			<div className="container">
				<div className="screen">
					<div className="result">{props.tabFinal.join("")}</div>
					{display}
					{/* <div className="affichage" id="display">
						{props.tabNumber.length ? props.tabNumber.join("") : 0}
					</div> */}
				</div>
				<div className="body">
					<div className="symbols">
						<div className="side_symbols">
							<button
								onClick={(e) => {
									handleSymbol(e);
								}}
							>
								{" "}
								-{" "}
							</button>
							<button
								onClick={(e) => {
									handleSymbol(e);
								}}
								id="plus"
							>
								{" "}
								+{" "}
							</button>
							<button
								id="equal"
								onClick={(e) => {
									handleNumber(e);
									handleEqual(e);
								}}
							>
								{" "}
								={" "}
							</button>
						</div>
						<div className="top_symbols">
							<button
								onClick={() => {
									props.reset();
									setCount(1);
								}}
							>
								AC
							</button>
							<button
								onClick={(e) => {
									handleSymbol(e);
								}}
							>
								{" "}
								/{" "}
							</button>
							<button
								onClick={(e) => {
									handleSymbol(e);
								}}
							>
								{" "}
								*{" "}
							</button>
						</div>
					</div>
					<div className="numbers">
						<button
							onClick={(e) => {
								handleNumber(e);
							}}
						>
							9
						</button>
						<button
							onClick={(e) => {
								handleNumber(e);
							}}
						>
							8
						</button>
						<button
							onClick={(e) => {
								handleNumber(e);
							}}
						>
							7
						</button>
						<button
							onClick={(e) => {
								handleNumber(e);
							}}
						>
							6
						</button>
						<button
							onClick={(e) => {
								handleNumber(e);
							}}
						>
							5
						</button>
						<button
							onClick={(e) => {
								handleNumber(e);
							}}
						>
							4
						</button>
						<button
							onClick={(e) => {
								handleNumber(e);
							}}
						>
							3
						</button>
						<button
							onClick={(e) => {
								handleNumber(e);
							}}
						>
							2
						</button>
						<button
							onClick={(e) => {
								handleNumber(e);
							}}
						>
							1
						</button>
						<button
							onClick={(e) => {
								handleNumber(e);
							}}
							id="zero"
						>
							0
						</button>
						<button
							onClick={(e) => {
								handleNumber(e);
							}}
						>
							.
						</button>
					</div>
					<div className="signature">Made By Patson</div>
					<div className="functions"></div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		tabNumber: state.screen.numberTab,
		tabFinal: state.screen.finalTab,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		affichage: (number) => dispatch(affichageAction(number)),
		symbol: (symbol) => dispatch(symbolAction(symbol)),
		resetNumber: () => dispatch(resetNumberAction()),
		reset: () => dispatch(resetAction()),
		replaceSymbol: () => dispatch(replaceSymbolAction()),
		replaceNumber: () => dispatch(replaceNumberAction()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
