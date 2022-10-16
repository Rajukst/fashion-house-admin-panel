
import React from "react";
import ProductChart from "../../components/AllCharts/ProductCharts/ProductChart";
import Heading from "../../components/Heading-dashboard/Heading";
import RecentOrder from "../../components/TopOrders/RecentOrder";

const Dashboard = () => {
  return (
    <>
     <Heading></Heading>
     <ProductChart></ProductChart>
     <RecentOrder></RecentOrder>
     <CompareSales
    </>
  );
};

export default Dashboard;
