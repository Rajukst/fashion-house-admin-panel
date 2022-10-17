import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MyManage from './MyManage';

const ManageProduct = () => {
    const [doctors, setDoctors]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/productes')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div>
            <h1>This is ManageProduct {doctors.length}</h1>
            <Grid container spacing={2}>
  <Grid item xs={12} md={6} lg={3}>
  {
    doctors.map((singleDoct)=> <MyManage
    key={singleDoct._id}
    prouct={singleDoct}
    ></MyManage> )
  }
  </Grid>
 
 
 
</Grid>
        </div>
    );
};

export default ManageProduct;