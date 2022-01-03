import React from "react";
import "./styles.css";

import { data } from "../../data/data";
import { CardSimple } from "../../components/CardSimple";

export const Teclados = () => {
    const teclados = data.filter((item) => item.label === "teclado");
    return (
        <div>
            <h2>Estas en Teclados</h2>

            <div className="container_card">
                {teclados.map((teclado) => (
                    <CardSimple nameCat={teclado} key={teclado.id} />
                ))}
            </div>
        </div>
    );
};
