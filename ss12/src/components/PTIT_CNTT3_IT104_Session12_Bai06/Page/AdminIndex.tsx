import React from "react";
import { Header } from "../Header";
import { Menu } from "../Menu";
import { Footer } from "../Footer";
import { Main } from "../Main";
export const AdminIndex = () => {
  return (
    <div className="adminContainer">
      <Header />
      <Menu />
      <div className="main_footer">
        <Main />
        <Footer />
      </div>
    </div>
  );
};