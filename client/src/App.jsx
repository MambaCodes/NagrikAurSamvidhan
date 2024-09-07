import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// PAGES

// Auth Pages
import { LoginForm } from "./pages/Auth/LoginForm";
import { SignupForm } from "./pages/Auth/SignupForm";
import { VerifyForm } from "./pages/Auth/VerifyForm";

// Error pages
import GeneralError from "./pages/error/general-error";
import MaintenanceError from "./pages/error/maintenance-error";
import NotFoundError from "./pages/error/not-found";

// User Pages

import LandingHow from "./components/About/LandingHow";
import ChapterContent from "./components/ChapterContent/ChapterContent";
import ChatWithAI from "./components/Chat/ChatWithAI";
import LandingFAQ from "./components/FAQ/LandingFAQ";
import Learning from "./components/Learn/Learning";
import Roadmap from "./components/Roadmap/RoadMap";
import Timeline from "./components/Timeline/TimeLine";
import V0About from "./components/V0/V0About";
import LandingHome from "./pages/Landing/LandingHome";
import LandingLayout from "./pages/Landing/LandingLayout";
import MainExplore from "./pages/Main/MainExplore";
import MainLayout from "./pages/Main/MainLayout";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<LandingLayout />}>
              <Route path="" element={<Navigate to="/home" />} />
              <Route path="home" element={<LandingHome />} />
              <Route path="about" element={<V0About />} />
              <Route path="how" element={<LandingHow />} />
              <Route path="faqs" element={<LandingFAQ />} />
            </Route>

            {/* Main Application */}
            <Route
              path="/app"
              element={
                localStorage.getItem("user") !== null ? (
                  <MainLayout />
                ) : (
                  <Navigate to="/signin" />
                )
              }
            >
              <Route path="" element={<Navigate to="explore" />} />
              <Route path="explore" element={<MainExplore />} />
              <Route path="learn" element={<Learning />} />
              <Route path="about" element={<V0About />} />
              <Route path="timeline" element={<Timeline />} />
              <Route path="roadmap" element={<Roadmap />} />
              <Route path="content/:id/:ind" element={<ChapterContent />} />
            </Route>
            {/* Added this seprately, becuase the dock-based navbar was overlapping with this */}
            <Route path="app/ai" element={<ChatWithAI />} />

            {/* Auth */}
            <Route path="/signin" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route
              path="/verification-one-time-password"
              element={<VerifyForm />}
            />
            <Route path="/forgot-password" element={<Navigate to="/404" />} />
            <Route path="/reset-password" element={<Navigate to="/404" />} />
            <Route path="/change-password" element={<Navigate to="/404" />} />

            {/* Errors */}
            <Route path="/404" element={<NotFoundError />} />
            <Route path="/503" element={<MaintenanceError />} />
            <Route path="/500" element={<GeneralError />} />

            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
