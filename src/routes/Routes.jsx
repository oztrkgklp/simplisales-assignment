import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from ".";

/** Header and Footer */
import Header from "/components/common/Header";
import Footer from "/components/common/Footer";

/** Components */
import Home from "/components/pages/Home";
import Login from "/components/pages/Login";

const RouteList = () => {
    const isSignedIn = useSelector(state => state.isSignedIn)
    let routes_ = useRoutes([
        /** Routes */
        { path: routes.Home, element: isSignedIn ? <Home /> : <Login /> },
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
