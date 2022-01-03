import React from "react";
import "./styles.css";

import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import { useShoppingContext } from "../../hooks/useShoppingContext";

export const ProductDetails = () => {
    const { id } = useParams();

    const [product] = data.filter((n) => n.id === Number(id));

    const { handleShoppingAdd } = useShoppingContext();

    return (
        <div className="style_ProductDetails">
            <h2>Categoria: {product.label}</h2>

            <div className="content_product">
                <div className="boxProduct">
                    <img src={product.url} alt={product.name} />
                </div>
                <div className="content_options">
                    <h3>{product.name}</h3>
                    <p>
                        <b>{product.desc}</b>
                    </p>
                    <h3>{product.price} COP</h3>
                </div>
                <div>
                    <button
                        className="btn btn_add"
                        onClick={() => handleShoppingAdd(product)}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};
