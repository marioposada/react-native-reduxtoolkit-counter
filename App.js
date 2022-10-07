import React from "react";
import store  from "./store";
import { Provider } from "react-redux";
import AppMain from "./components/index";

export default function App() {

  return (
    <Provider store={store}>
     <AppMain />
    </Provider>
  );
}


