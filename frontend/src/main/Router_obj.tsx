import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

function Router(props: any) {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/users" element={<UserCrud />} />
    </Routes>
  );
}

export default Router;
