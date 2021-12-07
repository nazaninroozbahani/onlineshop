import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./common/ScrollToTop";
import Layout from "./layout/Layout";
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import "./styles/index.scss";



const App = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const [pageOffset, setPageOffset] = useState(0);

    return (
        <BrowserRouter>
            <Layout>
                <ScrollToTop>
                    <Switch>
                        <Route exact path={"/"}>
                            <Redirect to="/laptops" />
                        </Route>
                        {/* <Route exact path={"/"} component={Home} /> */}
                        <Route exact path={"/laptops"}
                            render={() => <Products
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                pageOffset={pageOffset}
                                setPageOffset={setPageOffset}
                            />} />
                        <Route exact path={"/product/:id"} component={Product} />
                        <Route exact path={"/cart"} component={Cart} />
                        {/*<Route component={P404}/>*/}
                    </Switch>
                </ScrollToTop>
            </Layout>
        </BrowserRouter>
    );
};

export default App;