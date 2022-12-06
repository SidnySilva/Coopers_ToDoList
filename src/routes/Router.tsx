import { Routes, Route } from "react-router-dom";
import { UserSpace } from "../pages/dashboard";
import { Home } from "../pages/home/index";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<UserSpace />} />
    </Routes>
  );
};
