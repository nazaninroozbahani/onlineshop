import React, {Fragment} from 'react';
import styles from "./../Cart.module.scss";
import AsideBar from "./AsideBar";
import {useSelector} from "react-redux";
import CartItem from "./CartItem";

const FullCart = () => {

    const cartList = useSelector(state => state.cart.cartList)

    return (
        <div className={`${styles.full} container-fluid my-3`}>
            <div className="row">
                <div className="col-9">
                    <div className={`${styles.fullMain} card`}>
                        {
                            cartList.map((item, index) => {
                                return <Fragment key={item.id}>
                                    <CartItem item={item}/>
                                    {index < cartList.length - 1 && <hr style={{
                                        height: .5,
                                        borderColor: '#F8F8F8',
                                        margin: '1rem'
                                    }}/>}
                                </Fragment>
                            })
                        }
                    </div>
                </div>
                <div className="col-3">
                    <AsideBar/>
                </div>
            </div>
        </div>
    );
};

export default FullCart;