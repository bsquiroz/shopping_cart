import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Navb } from "../components/Navb/Navb";
import { OverlayShop } from "../components/OverlayShop";
import { useShoppingContext } from "../hooks/useShoppingContext";
import { Home } from "../Screens/Home";
import { Mesas } from "../Screens/Mesas";
import { Monitores } from "../Screens/Monitores";
import { Mouses } from "../Screens/Mouses";
import { Sillas } from "../Screens/Sillas";
import { Teclados } from "../Screens/Teclados";

export const NavigatorMain = () => {
    const { showOverlay } = useShoppingContext();

    return (
        <div>
            <Navb />

            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mesas" element={<Mesas />} />
                    <Route path="/monitores" element={<Monitores />} />
                    <Route path="/mouses" element={<Mouses />} />
                    <Route path="/sillas" element={<Sillas />} />
                    <Route path="/teclados" element={<Teclados />} />
                </Routes>
            </Container>

            {showOverlay && <OverlayShop />}

            <Footer />
        </div>
    );
};
