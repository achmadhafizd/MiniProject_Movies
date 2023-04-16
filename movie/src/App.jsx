import React from "react";
import LandingPage from "./views/LandingPage/LandingPage.view";
import { Provider } from "react-redux";
import store from "./config/redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="dark">
        <LandingPage />
      </div>
    </Provider>
  );
}

export default App;
