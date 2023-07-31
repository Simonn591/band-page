import "./app.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
