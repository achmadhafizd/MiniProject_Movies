import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "./config/redux/store";
import RootRouter from "./RootRouter";
import client from "./config/Apollo";
import "react-toastify/dist/ReactToastify.css";
import { ToastifyContainer } from "./config/Toastify/Toastify";

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persiststore}>
          <ToastifyContainer />
          <RootRouter />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
