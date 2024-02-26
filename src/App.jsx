import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./error.jsx";
import {
  Navbar,
  Hero,
  Events,
  Guildelines,
  Set1,
  Set2,
  Judges,
  About,
  Verify,
  Login,
} from "./components";
import Loading from "./components/loading.jsx";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(loader);
  }, []);

  useEffect(() => {
    if (!loading) {
      document.body.classList.toggle("body-image");
      document.querySelector(".app").classList.add("fadein");
    }
  }, [loading]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route
              path="*"
              element={
                <div className="bg-error">
                  <Error />
                </div>
              }
            />
            <Route
              path="/"
              element={
                <div className="bg">
                  <Hero />
                </div>
              }
            />
            <Route
              path="/events"
              element={
                <div className="events-bg">
                  <Events />
                </div>
              }
            />
            <Route
              path="/guidelines"
              element={
                <div className="guidelines-bg">
                  <Guildelines />
                </div>
              }
            />
            <Route
              path="/set2"
              element={
                <div className="set2-bg">
                  <Set2 />
                </div>
              }
            />
            <Route
              path="/set1"
              element={
                <div className="set1-bg">
                  <Set1 />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div>
                  <About />
                </div>
              }
            />
            <Route
              path="/judges"
              element={
                <div>
                  <Judges />
                </div>
              }
            />
            <Route path="/qr/verify/:id" element={<Verify />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
