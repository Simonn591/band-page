import React, { useState, useEffect } from "react";
import "../styles/navbar.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [data, setData] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/menus?populate=*",
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

  const Menu = () => (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <Link to="/about">{item.attributes.label1}</Link>
          <Link to="/music">{item.attributes.label2}</Link>
          <Link to="/video">{item.attributes.label3}</Link>
          <Link to="/shows">{item.attributes.label4}</Link>
          <a href="#footer">{item.attributes.label5}</a>
        </div>
      ))}
    </>
  );

  return (
    <div className="navbar-all" id="navbar">
      <div className="navbar-container">
        <div className="navbar-right">
          <Menu />
        </div>

        <div className="navbar-menu">
          {toggleMenu ? (
            <p
              onClick={() => setToggleMenu(false)}
              className="navbar-menu-close"
            >
              ×
            </p>
          ) : (
            <p
              onClick={() => setToggleMenu(true)}
              className="navbar-menu-lines"
            >
              ≡
            </p>
          )}
          {toggleMenu && (
            <div className="navbar-menu_container">
              <div className="navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
