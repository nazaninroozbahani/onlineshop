import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./common/ScrollToTop";
import Layout from "./layout/Layout";
import About from "./pages/About";
import AboutClass from "./pages/Aboutclass";
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import "./styles/index.scss";
import RouteChangeTracker from "./utils/RouteChangeTracker";

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
