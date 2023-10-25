import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";
import "../styles/about.scss";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/bands?populate=*",
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

  return (
    <div>
      <Navbar />
      <div className="about-all">
        {data.map((item) => (
          <div key={item.id} className="about-main">
            <p>
              <ReactMarkdown>{item.attributes.about}</ReactMarkdown>
            </p>
            <div className="about-home">
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

export default About;
