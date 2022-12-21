import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import './App.css';
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Projects from './pages/ProjectsPage';
import Skills from "./pages/SkillsPage";
import Resume from './pages/ResumePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<About />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/projects'} element={<Projects />} />
        <Route path={'/skills'} element={<Skills />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/resume'} element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}