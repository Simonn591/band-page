import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../styles/music.scss";
import Copyright from "./Copyright";

import { album } from "../data";
import Album from "./Album";

const Music = () => {
  const projects = album.map((item) => {
    return (
      <Album
        key={item.id}
        item={item}
        id={item.id}
        title={item.title}
        img={item.img}
        year={item.year}
        spotify={item.spotify}
        youtube={item.youtube}
        bandcamp={item.bandcamp}
      />
    );
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="music-all">
        <div className="music-main">
          <div className="music-albums">{projects}</div>
          <div className="music-home">
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

export default Music;
