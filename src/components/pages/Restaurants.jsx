import React, { useState } from "react";
import RestaurantCardList from "../Restaurant.Card.List";
import RestaurantDetail from "../Restaurant.Detail";

const Restaurants = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="page">
            <RestaurantCardList setOpen={setOpen} />
            <RestaurantDetail open={open} setOpen={setOpen} />
        </div>
    );
};

export default Restaurants;
