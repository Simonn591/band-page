import React from "react";
import "../styles/footer.scss";

/* eslint-disable react/prop-types */

const Footer = ({ item }) => {
  return (
    <section className="footer-all" id="footer">
      <h1 className="footer-title">{item.attributes.header}</h1>
      <div className="footer-content">
        <div className="links-container">
          <div className="links-mail">
            <a href={item.attributes.mailLink} target="_blank" rel="noreferrer">
              <img
                className="links-mail-img"
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  item.attributes.mailIcon.data.attributes.url
                }
                alt="mail"
              />
            </a>
          </div>
          <div className="links-instagram">
            <a
              href={item.attributes.instagramLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="links-instagram-img"
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  item.attributes.instagramIcon.data.attributes.url
                }
                alt="instagram"
              />
            </a>
          </div>
          <div className="links-facebook">
            <a
              href={item.attributes.facebookLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="links-facebook-img"
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  item.attributes.facebookIcon.data.attributes.url
                }
                alt="facebook"
              />
            </a>
          </div>
          <div className="links-bandcamp">
            <a
              href={item.attributes.bandcampLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="links-bandcamp-img"
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  item.attributes.bandcampIcon.data.attributes.url
                }
                alt="bandcamp"
              />
            </a>
          </div>
          <div className="links-youtube">
            <a
              href={item.attributes.youtubeLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="links-youtube-img"
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  item.attributes.youtubeIcon.data.attributes.url
                }
                alt="youtube"
              />
            </a>
          </div>
        </div>
        <div className="links-presskit">
          <a
            href={item.attributes.presskitLink}
            target="_blank"
            rel="noreferrer"
          >
            <button>{item.attributes.presskitButton}</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
