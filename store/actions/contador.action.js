import { contadorTypes } from "../types";
const { INCREMENTAR, DECREMENTAR, RESET } = contadorTypes;

export const sumar = () => {
  return {
    type: INCREMENTAR,
    payload: 1,
  };
};

export const restar = () => {
  return {
    type: DECREMENTAR,
    payload: 1,
  };
};
export const reset = () => {
  return {
    type: RESET,
  
  };
};
