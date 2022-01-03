import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ShoppingProvider } from "./context/shoppingContext";

const AppState = ({ children }) => {
    return <ShoppingProvider>{children}</ShoppingProvider>;
};

ReactDOM.render(
    <React.StrictMode>
        <AppState>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AppState>
    </React.StrictMode>,
    document.getElementById("root")
);
