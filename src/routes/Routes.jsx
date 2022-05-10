import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from ".";

/** Header and Footer */
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

/** Components */
import Home from "../components/pages/Home";

const RouteList = () => {
    let routes_ = useRoutes([
        /** Routes */
        { path: routes.Home, element: <Home /> },
    ]);

    return routes_;
};

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <RouteList />
            <Footer />
        </BrowserRouter>
    );
};

export default Routes;
