import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";
import "../styles/shows.scss";

const Shows = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="shows-all">
        <div className="shows-main">
          TODO
          <div className="shows-home">
            <a
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <Link to="/">&#8962;</Link>
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Shows;
