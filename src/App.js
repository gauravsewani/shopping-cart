import React from "react";
import data from "./components/back/Data/Data.js";
import Header from "./components/front/Header/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/front/Routes/Routes.js";

const App = () => {
  const { productItems } = data;
  return (
    <div>
      <Router>
        <Header />
        <Routes productItems={productItems} />
      </Router>
    </div>
  );
};

export default App;
