import React, { Suspense } from "react";
import "./app.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Copyright from "./components/Copyright";

const App = () => {
  return (
    <div className="app-all">
      <Suspense fallback={null}>
        <Navbar />
        <Carousel />
        <Footer />
        <Copyright />
      </Suspense>
    </div>
  );
};

export default App;
