import {
	AFFICHAGE,
	SYMBOL,
	RESETNUMBER,
	RESET,
	REPLACESYMBOL,
	REPLACENUMBER,
} from "../action/actionType";

const initialState = {
	numberTab: [],
	finalTab: [],
};

export const screenReducer = (state = initialState, action) => {
	if (action.type === REPLACESYMBOL) {
		let finalCopy = state.finalTab;
		finalCopy.pop();
		return {
			...state,
			finalTab: finalCopy,
		};
	}
	if (action.type === REPLACENUMBER) {
		let numberCopy = state.numberTab.slice();
		numberCopy.pop();
		return {
			...state,
			numberTab: numberCopy,
		};
	}
	switch (action.type) {
		case AFFICHAGE:
			return {
				...state,
				numberTab: state.numberTab.concat(action.number),
			};
		case SYMBOL:
			return {
				...state,
				finalTab: state.finalTab.concat(action.symbol),
			};
		case RESETNUMBER:
			return {
				...state,
				numberTab: [],
			};
		case RESET:
			return {
				...state,
				numberTab: [],
				finalTab: [],
			};
		default:
			return state;
	}
};
