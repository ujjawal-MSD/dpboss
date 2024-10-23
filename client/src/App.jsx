import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import Common from "./components/common";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/panel-chart-record/:panelName" element={<Common />} />
          <Route path="/jodi-chart-record/:panelName" element={<Common />} /> */}
          <Route path="*" element={<Common />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
