import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import BITCOIN from "./pages/BITCOIN";
import BNB from "./pages/BNB";
import ETHER from "./pages/ETHER";
import RIPPLE from "./pages/RIPPLE";
import TRX from "./pages/TRX";
import USDTBEP20 from "./pages/USDTBEP20";
import USDTERC20 from "./pages/USDTERC20";
import USDTTRC20 from "./pages/USDTTRC20";

const MainRoutes = () => {
  const ALL_ROUTES = [
    {
      link: "/",
      element: <Homepage />,
      id: 1,
    },
    {
      link: "/bitcoin",
      element: <BITCOIN />,
      id: 2,
    },
    {
      link: "/bnb",
      element: <BNB />,
      id: 3,
    },
    {
      link: "/ether",
      element: <ETHER />,
      id: 4,
    },
    {
      link: "/ripple",
      element: <RIPPLE />,
      id: 5,
    },
    {
      link: "/trx",
      element: <TRX />,
      id: 6,
    },
    {
      link: "/usdtbep20",
      element: <USDTBEP20 />,
      id: 7,
    },
    {
      link: "/usdterc20",
      element: <USDTERC20 />,
      id: 8,
    },
    {
      link: "/usdttrc20",
      element: <USDTTRC20 />,
      id: 9,
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
