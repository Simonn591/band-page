import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";
import "../styles/video.scss";
import YoutubeEmbed from "./YoutubeEmbed";
import axios from "axios";

const Video = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/videos?populate=*",
          {
            headers: {
              authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
            },
            // eslint-disable-next-line prettier/prettier
          }
        );
        setData(res.data.data);
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
      <div className="video-all">
        {data.map((item) => (
          <div className="video-main" key={item.id}>
            <div className="video-yt">
              <YoutubeEmbed embedId={item.attributes.link} />
            </div>
            <div className="video-home">
              <a
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <Link to="/">&#8962;</Link>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Video;
