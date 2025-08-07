import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import News from "./pages/News";
import Creators from "./pages/Creators";
import Organizations from "./pages/Organizations";
import OrganizationDetails from "./components/subPages/OrganizationDetails";
import LoginPage from "./pages/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="news" element={<News />} />
          <Route path="creators" element={<Creators />} />
          <Route path="organizations" element={<Organizations />} />
          <Route path="organizations/:id" element={<OrganizationDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
