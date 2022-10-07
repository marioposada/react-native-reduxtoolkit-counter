import contadorReducer from "./contador.reducer";
import {combineReducers} from "redux";

 const rootReducer = combineReducers({
    contadorReducer,
});


export default rootReducer;



