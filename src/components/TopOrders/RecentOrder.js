import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import RecentOrderes from "../RecentOrders/RecentOrderes";
import TopProduct from "../TopProduct/TopProduct";
import "./RecentOrder.css";
const RecentOrder = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <div className="heading-chart">
            <div className="order-summary">
              <h3>Top Ten Products</h3>
              <Link to="/all-orders">
                {" "}
                <h3>
                  All Products{" "}
                  <i className="fa-sharp fa-solid fa-arrow-right"></i>
                </h3>
              </Link>
            </div>
            <RecentOrderes></RecentOrderes>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div className="heading-chart">
          <div className="order-summary">
              <h3>Top Orders</h3>
              <Link to="/all-products">
                {" "}
                <h3>
                  All Orders{" "}
                  <i className="fa-sharp fa-solid fa-arrow-right"></i>
                </h3>
              </Link>
            </div>
            <TopProduct></TopProduct>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RecentOrder;
