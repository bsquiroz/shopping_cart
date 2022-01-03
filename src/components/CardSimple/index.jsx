import React from "react";
import "./styles.css";

import { useShoppingContext } from "../../hooks/useShoppingContext";

export const CardSimple = ({ nameCat }) => {
    const stateContext = useShoppingContext();
    const { handleShoppingAdd, shopping } = stateContext;

    return (
        <div className="style_card">
            <div className="box_img">
                <img src={nameCat.url} alt={nameCat.name} />
            </div>
            <div className="style_options">
                <h4>
                    {nameCat.name} - {nameCat.price} COP
                </h4>

                <div>
                    <button
                        className="btn btn_add"
                        onClick={() => handleShoppingAdd(nameCat)}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};
