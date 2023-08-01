import React from "react";
import "../styles/album.scss";
import PropTypes from "prop-types";

import bandcamp from "../assets/bandcamp.png";
import youtube from "../assets/youtube.png";
import spotify from "../assets/spotify.png";

export default function Album(props) {
  return (
    <div className="album-all">
      <img className="album-cover" src={props.item.img} alt="cover" />
      <br></br>
      <span className="album-title">
        <p>{props.item.title}</p>
      </span>
      <br></br>
      <span className="album-year">
        <p>{props.item.year}</p>
      </span>
      <br></br>
      <span className="album-spotify">
        <a href={props.item.spotify} target="_blank" rel="noreferrer">
          <img src={spotify} alt="spotify" />
        </a>
      </span>
      <span className="album-youtube">
        <a href={props.item.youtube} target="_blank" rel="noreferrer">
          <img src={youtube} alt="youtube" />
        </a>
      </span>
      <span className="album-bandcamp">
        <a href={props.item.bandcamp} target="_blank" rel="noreferrer">
          <img src={bandcamp} alt="bandcamp" />
        </a>
      </span>
    </div>
  );
}

Album.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    spotify: PropTypes.string.isRequired,
    youtube: PropTypes.string.isRequired,
    bandcamp: PropTypes.string.isRequired,
  }).isRequired,
};
