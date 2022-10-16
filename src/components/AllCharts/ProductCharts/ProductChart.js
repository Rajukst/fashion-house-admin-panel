import { Grid } from "@mui/material";
import React from "react";
import CustomerChart from "../CustomerChart/CustomerChart";
import HeadingChart from "../HeadingChart/HeadingChart";
import "./ProductChart.css";
const ProductChart = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} lg={7}>
          <div className="heading-chart">
            <HeadingChart></HeadingChart>
          </div>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <div className="heading-chart">
            <CustomerChart></CustomerChart>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductChart;
