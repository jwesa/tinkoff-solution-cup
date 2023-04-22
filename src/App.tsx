import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { History } from "./pages/history";
import { AppLayout } from "./app-layout";
import { AddCosts } from "./pages/add-costs";

export const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path={"*"} element={<Navigate to={"/add_costs"} />} />
        <Route path={"history"} element={<History />} />
        <Route path={"add_costs"} element={<AddCosts />} />
      </Routes>
    </AppLayout>
  );
};
