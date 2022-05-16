import "./styles/index.scss";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

import About from "./pages/About";
import AboutClass from "./pages/Aboutclass";
import Cart from "./pages/cart/Cart";
import Layout from "./layout/Layout";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import ScrollToTop from "./common/ScrollToTop";
import TagManager from "react-gtm-module";
import RouteChangeTracker from "./utils/RouteChangeTracker";

const tagManagerArgs = {
  gtmId: "UA-228762518-1",
  events: {
    sendUserInfo: "userInfo",
  },
};

TagManager.initialize(tagManagerArgs);

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageOffset, setPageOffset] = useState(0);

  return (
    <BrowserRouter>
      <RouteChangeTracker />
      <Layout>
        <ScrollToTop>
          <Routes>
            <Route
              exact
              path={"/"}
              element={<Navigate to="/laptops" />}
            ></Route>
            {/* <Route exact path={"/"} element={<Home/>} /> */}
            <Route
              exact
              path={"/laptops"}
              element={
                <Products
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageOffset={pageOffset}
                  setPageOffset={setPageOffset}
                />
              }
            />
            <Route exact path={"/product/:id"} element={<Product />} />
            <Route exact path={"/cart"} element={<Cart />} />
            <Route exact path={"/about"} element={<About />} />
            <Route exact path={"/aboutclass"} element={<AboutClass />} />
            {/*<Route element={<P404/>}/>*/}
          </Routes>
        </ScrollToTop>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
