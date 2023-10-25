import React, { useState, useEffect } from "react";
import "../styles/copyright.scss";
import axios from "axios";

const Copyright = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/footers?populate=*",
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
    <div className="copyright-all">
      {data.map((item) => (
        <p key={item.id}>{item.attributes.copyright}</p>
      ))}
    </div>
  );
};

export default Copyright;
