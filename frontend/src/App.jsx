import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";
import NewsPage from "./pages/NewsPage";
import Creators from "./pages/Creators";
import FeaturedOrg from "./organizationPage/AllOrganizations";
import OrganizationDetails from "./organizationPage/OrganizationDetails";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignuUpPage";
import EsportsHomepage from "./pages/EsportsHomepage";
import GameDetailPage from "./pages/GameDetailPage";
import InfluencerProfile from "./components/subPages/InfluencerProfile";
import ShopPage from "./pages/ShopPage";
import KnowAboutUs from "./pages/KnowAboutUs";
import KnowGamingEsports from "./pages/KnowGamingEsports";
import Organizers from "./pages/Organizers";
import ScrollToTop from "./components/Ui/ScrollToTop";
import MediaPromotion from "./pages/MediaPromotion";
import CareerPage from "./pages/CareerPage";
import LearningResources from "./pages/LearningResources";
import ServicesSection from "./components/Sections/ServicesSection";
import GamingTalentPage from "./pages/GamingTalentPage";
import AllPlayers from "./pages/AllPlayers";
import PlayerProfile from "./pages/PlayerProfile";
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="services" element={<ServicesSection />} />

          <Route path="aboutUs" element={<KnowAboutUs />} />
          <Route path="Gaming-Esports" element={<KnowGamingEsports />} />

          <Route path="esports" element={<EsportsHomepage />} />
          <Route path="esports/:id" element={<GameDetailPage />} />

          <Route path="players" element={<AllPlayers />} />
          <Route path="players/profile/:id" element={<PlayerProfile />} />

          <Route path="news" element={<NewsPage />} />

          <Route path="etalent" element={<GamingTalentPage />} />
          <Route path="creators" element={<Creators />} />
          <Route path="creators/:id" element={<InfluencerProfile />} />

          <Route path="organizations" element={<FeaturedOrg />} />
          <Route path="organizations/:id" element={<OrganizationDetails />} />

          <Route path="organizers" element={<Organizers />} />
          <Route path="/media-promotion" element={<MediaPromotion />} />

          <Route path="/learn" element={<LearningResources />} />
          <Route path="/careers" element={<CareerPage />} />
        </Route>

        <Route path="/admin/"></Route>
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
