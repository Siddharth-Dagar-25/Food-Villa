import React, { Suspense, lazy } from "react";
import { Footer } from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Provider, useSelector } from "react-redux";

function App() {
  const dark = useSelector((store) => store.app.isDark);

  return (
    <>
      <div className={`${dark ? "dark" : ""}`}>
    
          <Navbar />

          <Outlet />

          <Footer />
      
      </div>
    </>
  );
}
export default App;
