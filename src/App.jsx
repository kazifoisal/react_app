import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFoundpage from "./pages/NotFoundpage";
import Profilepage from "./pages/Profilepage";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id/:name" element={<ProductPage />} />
          <Route path="/profile/:fbId/:name" element={<Profilepage />} />
          <Route path="*" element={<NotFoundpage />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
