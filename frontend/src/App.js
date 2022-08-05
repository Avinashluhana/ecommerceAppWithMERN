import { useEffect } from "react";
import "./App.css";
import Header from "./component/layout/Header/Header";
import WebFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./component/About/About";
const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
