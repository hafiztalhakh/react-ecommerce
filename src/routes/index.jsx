import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../screens/home";
import ItemDetails from "../screens/item_details";
import Checkout from "../screens/checkout";
import OrderConfirmation from "../screens/checkout/Confirmation";

const AppRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="item/:itemId" element={<ItemDetails />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="checkout/success" element={<OrderConfirmation />} />
    </Routes>
  );
};

export default AppRoutes;
