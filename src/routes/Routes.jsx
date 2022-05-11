import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, useRoutes, Navigate } from "react-router-dom";
import routes from ".";

/** Header and Footer */
import Header from "/components/common/Header";
import Footer from "/components/common/Footer";

/** Pages */
import Home from "/components/pages/Home";
import Login from "/components/pages/Login";
import Profile from "/components/pages/Profile";
import Orders from "/components/pages/Orders";
import Restaurants from "/components/pages/Restaurants";

const RouteList = () => {
    const isSignedIn = useSelector((state) => state.isSignedIn.value);
    let routes_ = useRoutes([
        /** Routes */
        { path: routes.Home, element: !isSignedIn ? <Login /> : <Home /> },
        { path: routes.Profile, element: !isSignedIn ? <Login /> : <Profile /> },
        { path: routes.Orders, element: !isSignedIn ? <Login /> : <Orders /> },
        { path: routes.Restaurants, element: !isSignedIn ? <Login /> : <Restaurants /> },
        { path: routes.Login, element: <Login /> },
    ]);

    return routes_;
};

const Routes = () => {
    const isSignedIn = useSelector((state) => state.isSignedIn.value);
    return (
        <BrowserRouter>
            {isSignedIn && <Header />}
            <RouteList />
            {isSignedIn && <Footer />}
        </BrowserRouter>
    );
};

export default Routes;
