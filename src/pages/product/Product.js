import React, {useEffect, useState} from 'react';
import styles from "./Product.module.scss"
import PHeader from "./PHeader";
import Info from "./Info";
import Summary from "./Summary";
import {loadLaptopDetailFromJsonServer} from "../../api/api-laptop";
import {MoonLoader} from "react-spinners";
import Comments from "./Comments";
import { useParams } from 'react-router-dom';

const Product = (props) => {

    const params = useParams();

    const id = params.id;

    const [laptop, setLaptop] = useState();

    const [isLoading, setIsLoading] = useState(false);

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
                (!isLoading && id && laptop) ?
                    <div>
                        <PHeader/>
                        <div className={styles.pData}>
                            <div className={styles.pImage}>
                                <img src={laptop.img} className={styles.mainImage} alt={laptop.name}/>
                            </div>
                            <div className={styles.info}>
                                <Info laptop={laptop}/>
                            </div>
                            <Summary laptop={laptop}/>
                        </div>
                        {/*<Comments id={id}/>*/}
                    </div> :
                    <div className={styles.loadingParent}>
                        <MoonLoader color={"blue"} loading={isLoading} size={50}/>
                    </div>
            }
        </div>
    );
};

export default Product;