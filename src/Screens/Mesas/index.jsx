import React from "react";
import "./styles.css";

import { data } from "../../data/data";
import { CardSimple } from "../../components/CardSimple";

export const Mesas = () => {
    const mesas = data.filter((item) => item.label === "mesa");

    return (
        <div>
            <h2>Estas en mesas</h2>

            <div className="container_card">
                {mesas.map((mesa) => (
                    <CardSimple nameCat={mesa} key={mesa.id} />
                ))}
            </div>
        </div>
    );
};
