import { contadorTypes } from "../types";
const { INCREMENTAR, DECREMENTAR, RESET } = contadorTypes;

const initialState = {
  value: 0,
};

const contadorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENTAR":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "DECREMENTAR":
      if(state.value <= 0){
        return state;
      }
      return {
        ...state,
        value: state.value - action.payload,
      };
    case "RESET":
      return {
        ...state,
        value: initialState.value,
      };
    default:
      return state;
  }
};

export default contadorReducer;

