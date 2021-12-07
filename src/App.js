import React, {useEffect, useState} from 'react';
import "./styles/index.scss"
import Layout from "./layout/Layout";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import ScrollToTop from "./common/ScrollToTop";
import Cart from "./pages/cart/Cart";


const App = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const [pageOffset, setPageOffset] = useState(0);

    return (
        <BrowserRouter>
            <Layout>
                <ScrollToTop>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/laptops"}
                               render={() => <Products
                                   currentPage={currentPage}
                                   setCurrentPage={setCurrentPage}
                                   pageOffset={pageOffset}
                                   setPageOffset={setPageOffset}
                               />}/>
                        <Route exact path={"/product/:id"} component={Product}/>
                        <Route exact path={"/cart"} component={Cart}/>
                        {/*<Route component={P404}/>*/}
                    </Switch>
                </ScrollToTop>
            </Layout>
        </BrowserRouter>
    );
};

export default App;