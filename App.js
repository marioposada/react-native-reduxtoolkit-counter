import React from "react";
import { Provider } from "react-redux";
import AppMain from "./components/index";
import {store} from "./store/store";

export default function App() {

  return (
    <Provider store={store}>
     <AppMain />
    </Provider>
  );
}


