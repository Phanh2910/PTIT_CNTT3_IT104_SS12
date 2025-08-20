import React from "react";
import { Header } from "../Header";
import { Nav } from "../Nav";
import { Menu } from "../Menu";
import { Article } from "../Article";
import { Main } from "../Main";
export const UserLayout = () => {
    return (
        <div className="bai7_container">
            <Header />
            <Nav />
            <div className="main" style={{ display: "flex" }}>
                <Menu />
                <Main />
                <Article />
            </div>
        </div>
    );
};