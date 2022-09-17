import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

const MainRoutes = () => {
  const ALL_ROUTES = [
    {
      link: "/",
      element: <Homepage />,
      id: 1,
    },
  ];
  return (
    <Routes>
      {ALL_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
