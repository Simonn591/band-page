import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";
import "../styles/about.scss";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="about-all">
        <div className="about-main">
          <p>
            <span>Fusce suscipit libero eget elit.</span> Aliquam in lorem sit
            amet leo accumsan lacinia. Aenean id metus id velit ullamcorper
            pulvinar. Aenean fermentum risus id tortor. Integer malesuada.
            Aenean fermentum risus id tortor. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat. In
            rutrum. Duis pulvinar. Etiam dui sem, fermentum vitae, sagittis id,
            malesuada in, quam. <br />
            <br />
            Nullam faucibus mi quis velit. Proin mattis lacinia justo.{" "}
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
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default About;
