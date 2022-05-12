import React, { useState } from "react";
import OrderDetail from "../Order.Detail";
import OrderDataGrid from "../Order.Data.Grid";

const Orders = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="page">
            <OrderDataGrid setOpen={setOpen} />
            <OrderDetail open={open} setOpen={setOpen} />
        </div>
    );
};

export default Orders;
