import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

export default function MyCarousel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/carousels?populate=*",
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

  if (!data.length) {
    return null;
  }

  return (
    <div className="carousel-all">
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        animationHandler="fade"
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        swipeable={false}
        style={{ height: "78vh" }}
      >
        {data.map((item) => (
          <div key={item.id}>
            <img
              src={`${process.env.REACT_APP_UPLOAD_URL}${item.attributes.img.data.attributes.url}`}
              alt={`Slide ${item.id}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
