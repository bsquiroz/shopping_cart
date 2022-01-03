import React from "react";
import "./styles.css";

import { data } from "../../data/data";
import { CardSimple } from "../../components/CardSimple";

export const Sillas = () => {
    const sillas = data.filter((item) => item.label === "silla");
    return (
        <div>
            <h2>Estas en Sillas</h2>

            <div className="container_card">
                {sillas.map((silla) => (
                    <CardSimple nameCat={silla} key={silla.id} />
                ))}
            </div>
        </div>
    );
};
