import React from "react";
import "./styles.css";

import { data } from "../../data/data";
import { CardSimple } from "../../components/CardSimple";

export const Monitores = () => {
    const monitores = data.filter((item) => item.label === "monitor");

    return (
        <div>
            <h2>Estas en Monitores</h2>

            <div className="container_card">
                {monitores.map((monitor) => (
                    <CardSimple nameCat={monitor} key={monitor.id} />
                ))}
            </div>
        </div>
    );
};
