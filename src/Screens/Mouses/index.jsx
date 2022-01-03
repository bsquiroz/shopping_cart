import React from "react";
import "./styles.css";

import { data } from "../../data/data";
import { CardSimple } from "../../components/CardSimple";

export const Mouses = () => {
    const mouses = data.filter((item) => item.label === "mouse");
    return (
        <div>
            <h2>Estas en Mouses</h2>

            <div className="container_card">
                {mouses.map((mouse) => (
                    <CardSimple nameCat={mouse} key={mouse.id} />
                ))}
            </div>
        </div>
    );
};
