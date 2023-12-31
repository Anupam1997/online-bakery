import React from "react";
import ChartByOrderCount from "./AdminCharts/ChartByOrderCount";
import ChartByOrderValue from "./AdminCharts/ChartByOrderValue";
import OrderByState from "./AdminCharts/OrderByState";
import OrderByCategory from "./AdminCharts/OrderByCategory";
import "./style.scss";
import TopBranches from "./AdminCharts/TopBranches";
import OrderByCategoryPie from "./AdminCharts/OrderByCategoryPie";
import OrderByStatePie from "./AdminCharts/OrderByStatePie";

function AdminPanel() {
  return (
    <div
      style={{ marginTop: "100px" }}
      className="container container-sm container-md container-lg container-xl"
    >
      <div className="row">
        <div className="col-12 my-4">
          <div className="widget-card">
            <ChartByOrderCount />
          </div>
        </div>
        <div className="col-12  my-4">
          <div className="widget-card">
            <ChartByOrderValue />
          </div>
        </div>
        <div className="col-12 col-xl-6 col-lg-6 my-4">
          <div className="widget-card">
            <OrderByCategory />
          </div>
        </div>
        <div className="col-12 col-xl-6 col-lg-6 my-4">
          <div className="widget-card">
            <OrderByState />
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 my-4">
          <div className="widget-card">
            <OrderByCategoryPie />
          </div>
        </div>
        <div className="col-12 col-xl-6 col-lg-6 my-4">
          <div className="widget-card">
            <OrderByStatePie />
          </div>
        </div>

        <div className="col-12 my-4">
          <div className="widget-card">
            <TopBranches />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
