import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutWb = () => {
    return (
        <div className="container">
            <Header />
            <div className="tw-border-2 tw-border-red-500">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default LayoutWb;