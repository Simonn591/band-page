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
          <table className="shows-table">
            <tr>
              <td>Klubovna</td>
              <td>25.10.2022</td>
            </tr>
            <tr>
              <td>U Vystřelenýho oka</td>
              <td>3.12.2022</td>
            </tr>
            <tr>
              <td>O2 Arena</td>
              <td>10.2.2033</td>
            </tr>
          </table>
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
