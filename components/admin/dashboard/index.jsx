import React from "react";
import { UserPieChart } from "./pieChart";
import { UserBarChart } from "./barChart";
import { UserWaveChart } from "./waveChart";

const AdminPage = () => {
  return (
    <div className="mt-10 px-10 pb-10">
      <div className="grid grid-cols-2 gap-5 mb-10">
        <UserBarChart />
        <UserPieChart />
      </div>
      <UserWaveChart />
    </div>
  );
};

export default AdminPage;
