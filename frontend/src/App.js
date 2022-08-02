import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/layout/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";

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
      <Router>
        <Header />
      </Router>
    </div>
  );
};

export default App;
