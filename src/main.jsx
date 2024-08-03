import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/useAuthContext.jsx";
import { Provider } from "react-redux";
import store  from "./app/store.js";
import { injectStore } from "./app/storeInjector.js";



injectStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      
    </BrowserRouter>
  </React.StrictMode>
);
