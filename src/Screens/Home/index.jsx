import React from "react";
import "./styles.css";

import { data } from "../../data/data";
import { CardSimple } from "../../components/CardSimple";

export const Home = () => {
    return (
        <div>
            <h2>Estas en Home</h2>

            <div className="container_card">
                {data.map((i) => (
                    <CardSimple nameCat={i} key={i.id} />
                ))}
            </div>
        </div>
    );
};
