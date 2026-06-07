
import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./src/pages/home";
import { APP_URLS } from "./src/helpers";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={APP_URLS.home} element={<Home />} />
          <Route path="*" element={<Navigate to={APP_URLS.home} />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;
