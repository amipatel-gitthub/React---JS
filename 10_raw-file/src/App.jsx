import React from "react";

import Home from "./modules/layout/pages/home/Home";
import About from "./modules/layout/pages/about/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      {/* <Home></Home> */}
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}></Route> {/* Default */}
          <Route path={"/about"} element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
