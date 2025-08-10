import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import ProductPage from "./assets/pages/ProductPage";
import NotFoundpage from "./assets/pages/NotFoundpage";
import Profilepage from "./assets/pages/Profilepage";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="*" element={<NotFoundpage />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
