import React from "react";
import "./styles.css";

import { useShoppingContext } from "../../hooks/useShoppingContext";
import { Link } from "react-router-dom";

export const CardSimple = ({ nameCat }) => {
    const stateContext = useShoppingContext();
    const { handleShoppingAdd } = stateContext;

    const url = window.location.href.split("/").pop();

    return (
        <div className="style_card">
            <div className="box_img">
                <img src={nameCat.url} alt={nameCat.name} />
            </div>
            <div className="style_options">
                <h4>
                    {nameCat.name} - {nameCat.price} COP
                </h4>

                <div className="content_buttons">
                    <button
                        className="btn btn_add"
                        onClick={() => handleShoppingAdd(nameCat)}
                    >
                        Agregar al carrito
                    </button>
                    <span className="btn btn_more">
                        <Link to={`/${url}/${nameCat.id}`}>Ver mas</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};
