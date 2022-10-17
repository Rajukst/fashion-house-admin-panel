import React from "react";
import ProductChart from "../../components/AllCharts/ProductCharts/ProductChart";
import Heading from "../../components/Heading-dashboard/Heading";
import RecentOrder from "../../components/TopOrders/RecentOrder";
import CompareSales from "../../components/CompareSales/CompareSales";
const Dashboard = () => {
  return (
    <>
      <Heading></Heading>
      <ProductChart></ProductChart>
      <RecentOrder></RecentOrder>
      <CompareSales></CompareSales>
    </>
  );
};

export default Dashboard;
