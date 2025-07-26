// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";
import ExperiencePage from "./pages/experience/ExperiencePage";
import EducationPage from "./pages/education/EducationPage";
import ProjectPage from "./pages/projects/ProjectPage";
import SkillPage from "./pages/skills/SkillPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

    useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration
      once: true,      // whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on route change
  }, [location]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="skill" element={<SkillPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
