import { useEffect } from "react";
import "./App.css";
import Header from "./component/layout/Header/Header";
import WebFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./component/About/About";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignup from "./component/User/LoginSignup";
import store from "./store";
import { loadUser } from "./Redux/actions/userAction";
import { useSelector } from "react-redux";
import UserOptions from "./component/layout/Header/UserOptions";
const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {isAuthenticated && <UserOptions user={user} />}

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/product/:id" element={<ProductDetails />} exact />
          <Route path="/products" element={<Products />} exact />
          <Route path="/products/:keyword" element={<Products />} exact />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<LoginSignup />} exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
