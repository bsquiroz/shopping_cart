import React, { useState } from "react";
import "./styles.css";

import { Link } from "react-router-dom";
import { Carrito } from "../Carrito";

import IconClose from "../../assets/icon_svg/close.svg";
import IconMenu from "../../assets/icon_svg/menu.svg";

export const Navb = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShow = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="container_nav">
            <nav>
                <span className="logo">
                    <Link to="/">Bsquiroz</Link>
                </span>
                <ul className={showMenu ? "menu active_menu" : "menu"}>
                    <li onClick={handleShow}>
                        <Link to="/">Home</Link>
                    </li>
                    <li onClick={handleShow}>
                        <Link to="/mesas">Mesas</Link>
                    </li>
                    <li onClick={handleShow}>
                        <Link to="/monitores">Monitores</Link>
                    </li>
                    <li onClick={handleShow}>
                        <Link to="/mouses">Mouses</Link>
                    </li>
                    <li onClick={handleShow}>
                        <Link to="/sillas">Sillas</Link>
                    </li>
                    <li onClick={handleShow}>
                        <Link to="/teclados">Teclados</Link>
                    </li>
                </ul>

                <Carrito setShowMenu={setShowMenu} />
                <div className="toggle" onClick={handleShow}>
                    {showMenu ? (
                        <img src={IconClose} alt="close" width={50} />
                    ) : (
                        <img src={IconMenu} alt="menu" width={50} />
                    )}
                </div>
            </nav>
        </div>
    );
};
