import React from "react";
import { useShoppingContext } from "../../hooks/useShoppingContext";
import "./styles.css";

export const OverlayShop = () => {
    const { shopping, handleShoppingDel, totalAll } = useShoppingContext();
    return (
        <div className="container_overlay">
            {shopping.map((item) => (
                <div className="card_overlay" key={item.id}>
                    <div className="boxImgMin">
                        <img src={item.url} alt={item.name} />
                    </div>
                    <div>
                        <p>{item.name}</p>
                        <p>cantidad: {item.amount}</p>
                        <p>{Number(item.amount * item.price)} COP</p>
                    </div>
                    <div>
                        <button
                            onClick={() => handleShoppingDel(item)}
                            className="btn btn_del"
                        >
                            Eliminar producto
                        </button>
                    </div>
                </div>
            ))}

            {shopping.length > 0 ? (
                <div>
                    <b>Total a pagar: {totalAll()} COP</b>
                </div>
            ) : (
                <h2>Agrega algo al carrito</h2>
            )}
        </div>
    );
};
