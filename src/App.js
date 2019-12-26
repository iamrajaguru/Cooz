import React from "react";
import CookDash from "./CookFlow/Containers/codedash";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CookDash />
      </div>
    </Provider>
  );
}

export default App;
