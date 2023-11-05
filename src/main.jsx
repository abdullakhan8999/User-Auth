import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { auth } from "./Constants/AuthO.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={auth.domain}
    clientId={auth.clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
    <ToastContainer />
  </Auth0Provider>
);
