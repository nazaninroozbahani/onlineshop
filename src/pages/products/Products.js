import React, {useEffect, useState} from 'react';

import {DotLoader} from "react-spinners";
import Pagination from "./Pagination";
import ProductBoxxx from "./ProductBox";
import Sort from "./Sort";
import Top from "./Top";
import styles from "./Products.module.scss"
import {useSelector} from "react-redux";

const PER_PAGE = 12;

const Products = ({currentPage, setCurrentPage}) => {

    const [laptopList, setLaptopList] = useState([]);

    const laptops = useSelector(state => state.laptops.laptops);
    const isLoading = useSelector(state => state.laptops.isLoading);

    const [sortParam, setSortParam] = useState(0);


    const handlePageClick = ({selected: selectedPage}) => {
        setCurrentPage(selectedPage);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    

    const offset = currentPage * PER_PAGE;

    const pageCount = Math.ceil(laptops.length / PER_PAGE);


    useEffect(() => {
        setLaptopList(laptops);
    }, [laptops]);

    useEffect(() => {
        if (laptops.length !== 0) {
            if (sortParam === 0) {
                setLaptopList(laptops.slice().sort((a, b) => a.id - b.id));
            } else if (sortParam === 1) {
                setLaptopList(laptops.slice().sort((a, b) => parseInt(b.price) - parseInt(a.price)));
            } else if (sortParam === 2) {
                setLaptopList(laptops.slice().sort((a, b) => parseInt(a.price) - parseInt(b.price)));
            }

        }
    }, [sortParam])


    return (
      <div className={styles.products}>
        {!isLoading ? (
          <>
            {/* <Sidebar/> */}
            <div className={styles.main}>
              <Top />
              <div className={styles.result}>
                {!isLoading && (
                  <>
                    <Sort
                      sortParam={sortParam}
                      setSortParam={setSortParam}
                      setCurrentPage={setCurrentPage}
                    />
                    <div className={styles.list}>
                      {laptopList.length > 0 &&
                        laptopList
                          .slice(offset, offset + PER_PAGE)
                          .map((item) => (
                            <ProductBoxxx key={item.id} item={item} />
                          ))}
                    </div>
                    <Pagination
                      pageCount={pageCount}
                      onPageChange={handlePageClick}
                      activePage={currentPage}
                    />
                  </>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className={styles.loadingParent}>
            <DotLoader color={"blue"} loading={isLoading} size={80} />
          </div>
        )}
      </div>
    );
};

export default Products;