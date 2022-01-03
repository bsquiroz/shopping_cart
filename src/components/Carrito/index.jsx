import React from "react";
import { useShoppingContext } from "../../hooks/useShoppingContext";
import "./styles.css";

export const Carrito = () => {
    const { shopping, showOverlay, setShowOverlay } = useShoppingContext();

    return (
        <span
            onClick={() => setShowOverlay(!showOverlay)}
            className="style_carrito"
        >
            Carrito <b>{shopping.length}</b>
        </span>
    );
};
