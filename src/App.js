import React, { useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import 'lenis/dist/lenis.css'

import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./routes/Home";
import ESummit from "./routes/ESummit";
import Archives from "./routes/Archives";
import OurTeam from "./routes/OurTeam";
import Contact from "./routes/Contact";
import ErrorPage from "./routes/ErrorPage";
import Footer from "./components/Footer/Footer"
import Register from "./routes/Register";


export const AppLayout = () => {
  useEffect(() => {
    // Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
  });
  // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
  return (
    <>
    
      <Navbar />
      <Outlet />
      <Footer />
     
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/esummit",
        element: <ESummit />,
      },
      {
        path: "/archives",
        element: <Archives />,
      },
      {
        path: "/ourteam",
        element: <OurTeam />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

