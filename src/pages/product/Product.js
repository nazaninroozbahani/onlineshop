import React, {useEffect, useState} from 'react';
import styles from "./Product.module.scss"
import PHeader from "./PHeader";
import Info from "./Info";
import Summary from "./Summary";
import {loadLaptopDetailFromJsonServer} from "../../api/api-laptop";
import {MoonLoader} from "react-spinners";

const Product = (props) => {

    const id = props.match.params.id;

    const [laptop, setLaptop] = useState({});

    let [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        loadLaptopDetailFromJsonServer(id, (isOk, data) => {
            setIsLoading(false);
            if (!isOk)
                return alert("ناموفق در گرفتن جزئیات لپ تاپ");
            setLaptop(data);

        })
    }, []);


    return (
        <div className={styles.root}>
            {
                !isLoading ?
                    <div>
                        <PHeader/>
                        <div className={styles.pData}>
                            <div className={styles.pImage}>
                                <img src={laptop.img} className={styles.mainImage}/>
                            </div>
                            <div className={styles.info}>
                                <Info laptop={laptop}/>
                            </div>
                            <Summary laptop={laptop}/>
                        </div>
                    </div> :
                    <div className={styles.loadingParent}>
                        <MoonLoader color={"blue"} loading={isLoading} size={50}/>
                    </div>
            }
        </div>
    );
};

export default Product;