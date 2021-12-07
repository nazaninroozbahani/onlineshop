import React, {useEffect, useState} from 'react';
import Sidebar from "./sidebar/Sidebar";
import styles from "./Products.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {loadLaptopsFromJsonServer} from "../../api/api-laptop";
import {setLaptops} from "../../redux/laptops/LaptopsAction";
import {DotLoader} from "react-spinners";
import Top from "./Top";
import Sort from "./Sort";
import Pagination from "./Pagination";
import ProductBox from "./ProductBox";


const PER_PAGE = 12;

const Products = ({currentPage, setCurrentPage, pageOffset, setPageOffset}) => {

    const [laptopList, setLaptopList] = useState([]);

    const laptops = useSelector(state => state.laptops.laptops);

    const [sortParam, setSortParam] = useState(0);

    const [isLoading, setIsLoading] = useState(true);


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

    const dispatch = useDispatch();

    useEffect(() => {
        loadLaptopsFromJsonServer((isOk, data) => {
            if (!isOk)
                return alert("ناموفق در گرفتن لیست لپ تاپ ها");
            dispatch(setLaptops(data));
            setIsLoading(false);
        })
    }, []);


    // useEffect(() => {
    //     // window.scrollTo({
    //     //     top: pageOffset,
    //     //     behavior: "smooth"
    //     // });
    //     window.scrollY = pageOffset
    // }, [pageOffset]);
    //
    //
    // useEffect(() => {
    //     window.addEventListener('scroll', listenToScroll);
    //     return () => {
    //         window.removeEventListener('scroll', listenToScroll)
    //     }
    // }, []);
    //
    //
    // const listenToScroll = () => {
    //     const winScroll =
    //         document.body.scrollTop || document.documentElement.scrollTop
    //
    //     const height =
    //         document.documentElement.scrollHeight -
    //         document.documentElement.clientHeight
    //
    //     const scrolled = winScroll / height
    //
    //     setPageOffset(scrolled);
    // }

    return (
        <div className={styles.products}>
            {
                !isLoading ?
                    <>
                        <Sidebar/>
                        <div className={styles.main}>
                            <Top/>
                            <div className={styles.result}>
                                {
                                    !isLoading &&
                                    <>
                                        <Sort sortParam={sortParam} setSortParam={setSortParam}
                                              setCurrentPage={setCurrentPage}/>
                                        <div className={styles.list}>
                                            {
                                                laptopList.length > 0 &&
                                                laptopList
                                                    .slice(offset, offset + PER_PAGE)
                                                    .map(item => <ProductBox key={item.id} item={item}/>)
                                            }
                                        </div>
                                        <Pagination pageCount={pageCount} onPageChange={handlePageClick}
                                                    activePage={currentPage}/>
                                    </>
                                }
                            </div>
                        </div>
                    </>

                    :
                    <div className={styles.loadingParent}>
                        <DotLoader color={"blue"} loading={isLoading} size={80}/>
                    </div>
            }
        </div>
    );
};

export default Products;