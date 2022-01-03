import React from "react";
import { useShoppingContext } from "../../hooks/useShoppingContext";
import "./styles.css";
import IconShoppingCart from "../../assets/icon_svg/shopping_cart.svg";

export const Carrito = ({ setShowMenu }) => {
    const { shopping, showOverlay, setShowOverlay } = useShoppingContext();

    const handleShop = () => {
        setShowOverlay(!showOverlay);
        setShowMenu(false);
    };

    return (
        <span onClick={handleShop} className="style_carrito">
            {!showOverlay ? (
                <>
                    <img src={IconShoppingCart} alt="sc" />{" "}
                    <b>{shopping.length}</b>
                </>
            ) : (
                "Cerrar"
            )}
        </span>
    );
};
