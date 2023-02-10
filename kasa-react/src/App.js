import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import DetailsHost from "./pages/DetailsHost";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/DetailsHost/:id" element={<DetailsHost />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>

  );
};

export default App;
