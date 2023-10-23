import React from "react";
import "../styles/album.scss";

import PropTypes from "prop-types";

const Album = ({ data }) => {
  return (
    <div className="album-all">
      {data.map((item) => (
        <div key={item.id}>
          <img
            className="album-cover"
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes.cover.data.attributes.url
            }
            alt="cover"
          />
          <br />
          <span className="album-title">
            <p>{item.attributes.title}</p>
          </span>
          <br />
          <span className="album-year">
            <p>{item.attributes.year}</p>
          </span>
          <br />
          <span className="album-spotify">
            <a
              href={item.attributes.spotifyLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  item.attributes.spotify.data.attributes.url
                }
                alt="spotify"
              />
            </a>
          </span>
          <span className="album-youtube">
            <a
              href={item.attributes.youtubeLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  item.attributes.youtube.data.attributes.url
                }
                alt="youtube"
              />
            </a>
          </span>
          <span className="album-bandcamp">
            <a
              href={item.attributes.bandcampLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  item.attributes.bandcamp.data.attributes.url
                }
                alt="bandcamp"
              />
            </a>
          </span>
        </div>
      ))}
    </div>
  );
};

Album.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Album;
