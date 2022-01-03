import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";
import { Container } from "../Container";
import { Carrito } from "../Carrito";

export const Navb = () => {
    return (
        <div className="container_nav">
            <nav>
                <span className="logo">Bsquiroz</span>
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/mesas">Mesas</Link>
                    </li>
                    <li>
                        <Link to="/monitores">Monitores</Link>
                    </li>
                    <li>
                        <Link to="/mouses">Mouses</Link>
                    </li>
                    <li>
                        <Link to="/sillas">Sillas</Link>
                    </li>
                    <li>
                        <Link to="/teclados">Teclados</Link>
                    </li>
                </ul>

                <Carrito />
            </nav>
        </div>
    );
};
