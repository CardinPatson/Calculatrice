import {
	AFFICHAGE,
	SYMBOL,
	RESETNUMBER,
	RESET,
	REPLACENUMBER,
	REPLACESYMBOL,
} from "./actionType";

//affichageAction sera une fonction asynchrone car doit comporter plusieurs contraintes
export const affichageAction = (number) => {
	return {
		type: AFFICHAGE,
		number: number,
	};
};

export const symbolAction = (symbol) => {
	return {
		type: SYMBOL,
		symbol: symbol,
	};
};
export const resetNumberAction = () => {
	return {
		type: RESETNUMBER,
	};
};

export const resetAction = () => {
	return {
		type: RESET,
	};
};
export const replaceNumberAction = () => {
	return {
		type: REPLACENUMBER,
	};
};

export const replaceSymbolAction = () => {
	return {
		type: REPLACESYMBOL,
	};
};
