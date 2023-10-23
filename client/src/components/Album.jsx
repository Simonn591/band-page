import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/album.scss";

export default function Album() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/albums?populate=*",
          {
            headers: {
              authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
            },
          },
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
          <br></br>
          <span className="album-title">
            <p>{item.attributes.title}</p>
          </span>
          <br></br>
          <span className="album-year">
            <p>{item.attributes.year}</p>
          </span>
          <br></br>
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
}
