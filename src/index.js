import React from "react";
import ReactDOM from "react-dom/client";
// CSS
import "./css/top.css";
import "./css/bot.css";
import "./css/mid.css";
import "./css/general.css";

// CSS

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//      Abajo se importan los componentes
import Rutas from "./utils/Rutas";
import { Auth0Provider } from "@auth0/auth0-react";

//      Arriba se importan los componentes



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain= {process.env.REACT_APP_AUTH0_DOMAIN}

      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <div>
          <Rutas />
        </div>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
