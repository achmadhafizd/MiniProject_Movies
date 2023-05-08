import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "./config/redux/store";
import RootRouter from "./RootRouter";
import client from "./config/Apollo";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persiststore}>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          ;
          <RootRouter />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
