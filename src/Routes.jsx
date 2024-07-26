import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "homepage", element: <HomePage /> },
    { path: "skillspage", element: <SkillsPage /> },
  ]);

  return element;
};

export default ProjectRoutes;
