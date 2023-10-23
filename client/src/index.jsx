import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Music from "./components/Music";
import Video from "./components/Video";
import Shows from "./components/Shows";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/music" element={<Music />} />
      <Route path="/video" element={<Video />} />
      <Route path="/shows" element={<Shows />} />
    </Routes>
  </Router>,
);
