import { combineReducers } from "redux";
import { screenReducer } from "./screenReducer";

const rootReducer = combineReducers({
	screen: screenReducer,
});

export default rootReducer;
