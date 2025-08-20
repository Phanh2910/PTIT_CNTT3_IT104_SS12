import React from "react";
import { Cart } from "./Cart";
export const Main = () => {
    const style: React.CSSProperties = {
        backgroundColor: "lightpink",
        height: "600px",
        width: "50%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        padding: "20px",
        justifyContent: "center",
    };
    return (
        <div style={style}>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
        </div>
    );
};
