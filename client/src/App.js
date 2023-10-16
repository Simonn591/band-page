import React, { useState, useEffect, Suspense } from "react";
import "./app.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Copyright from "./components/Copyright";
import axios from "axios";

const App = () => {
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
          } /* eslint-disable-next-line prettier/prettier */
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app-all">
      <Suspense fallback={null}>
        {data.map((item) => (
          <div key={item.id}>
            <Navbar item={item} />
            <Footer item={item} />
            <Carousel item={item} />
            <Copyright item={item} />
          </div>
        ))}
      </Suspense>
    </div>
  );
};

export default App;
