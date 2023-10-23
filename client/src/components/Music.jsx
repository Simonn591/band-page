import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../styles/music.scss";
import Copyright from "./Copyright";
import axios from "axios";
import Album from "./Album";

const Music = () => {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/albums?populate=*`,
          {
            headers: {
              authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
            },
          },
        );
        setAlbum(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="music-all">
        <div className="music-main">
          <Album data={album} />
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
