import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./pages/home";
import Layout from "./pages/home/layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Add more routes here */}
          {/* <Route path="/about" element={<About />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
