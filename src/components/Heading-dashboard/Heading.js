import { Grid } from '@mui/material';
import React from 'react';
import "./Heading.css"
const Heading = () => {
    return (
        <Grid className="heading-container" container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <div className="products">
            <div className="product-count">
                <div className="product">
                <i className="fa-solid fa-bell fa-3x"></i>
                <h1>35</h1>
                </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <div className="products">
            <div className="product-count">
                <div className="product">
                <i className="fa-solid fa-cart-shopping fa-3x"></i>
                <h1>35</h1>
                </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <div className="products">
            <div className="product-count">
                <div className="product">
                <i className="fa-sharp fa-solid fa-universal-access fa-3x"></i>
                <h1>35</h1>
                </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <div className="products">
            <div className="product-count">
                <div className="product">
                <i className="fa-sharp fa-solid fa-user fa-3x"></i>
                <h1>35</h1>
                </div>
            </div>
          </div>
        </Grid>
      </Grid>
    );
};

export default Heading;