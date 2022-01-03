import React from "react";

export const Container = ({ children }) => {
    return (
        <div style={{ maxWidth: "1200px", margin: "1em auto 0 auto" }}>
            {children}
        </div>
    );
};
