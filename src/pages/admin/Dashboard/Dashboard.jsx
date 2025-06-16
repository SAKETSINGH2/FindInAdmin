// import { Col, Row } from 'antd'
// import React from 'react'

// import AdminSlider from './components/AdminSlider'
// import CategorySlider from './components/CategorySlider'
// import SubCategorySlider from './components/SubCategorySlider';
// import StaticsData from './components/StaticsData';

// function Dashboard() {
//     return (
//         <>
//             <Row gutter={[16, 16]}>
//                 <Col xs={24} sm={24} md={15}>
//                     <AdminSlider />
//                     <CategorySlider />
//                     <SubCategorySlider />
//                 </Col>
//                 <Col xs={24} sm={24} md={9}>
//                     <StaticsData />
//                 </Col>
//             </Row>
//         </>
//     )
// }

// export default Dashboard

import { Col, Row, Spin, message } from "antd";
import React, { useEffect, useState, useCallback } from "react";
import AdminSlider from "./components/AdminSlider";
import CategorySlider from "./components/CategorySlider";
import SubCategorySlider from "./components/SubCategorySlider";
import StaticsData from "./components/StaticsData";
import DashboardCharts from "./components/DashboardCharts";
import RecentOrders from "./components/RecentOrders";
import PendingApprovals from "./components/PendingApprovals";
import QuickStats from "./components/QuickStats";
import { getDashboard } from "../../../services/admin/apiDashboard";
import MonthlySalesChart from "./components/MonthlySalesChart";
import ServiceWiseSalesChart from "./components/ServiceWiseSalesChart";
import ServiceWiseVendorChart from "./components/ServiceWiseVendorChart copy";

function Dashboard({ service }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const selectedService =
    service || localStorage.getItem("selectedService") || "food";

  const fetchDashboard = useCallback(async () => {
    try {
      const res = await getDashboard(selectedService);
      setData(res);
    } catch (error) {
      message.error("Error fetching dashboard data");
    } finally {
      setLoading(false);
    }
  }, [selectedService]);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  return (
    <div className="p-4">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24}>
          {data ? (
            <StaticsData data={data.countData} loading={loading} />
          ) : (
            <Spin size="large" />
          )}
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={16}>
          <MonthlySalesChart />
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <ServiceWiseSalesChart />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={8}>
          <ServiceWiseVendorChart />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
