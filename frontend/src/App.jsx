import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import NewsPage from "./pages/NewsPage";
import Creators from "./pages/Creators";
import Organizations from "./pages/Organizations";
import OrganizationDetails from "./components/subPages/OrganizationDetails";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignuUpPage";
import EsportsHomepage from "./pages/EsportsHomepage";
import GameDetailPage from "./pages/GameDetailPage";
import InfluencerProfile from "./components/subPages/InfluencerProfile";
import ShopPage from "./pages/ShopPage";
import KnowAboutUs from "./components/subPages/KnowAboutUs";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="aboutUs" element={<KnowAboutUs />} />

          <Route path="esports" element={<EsportsHomepage />} />
          <Route path="esports/:id" element={<GameDetailPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="creators" element={<Creators />} />
          <Route path="creators/:id" element={<InfluencerProfile />} />

          <Route path="organizations" element={<Organizations />} />
          <Route path="organizations/:id" element={<OrganizationDetails />} />
        </Route>
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
