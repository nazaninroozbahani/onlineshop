import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from "../Cart.module.scss";

const QuantitySelector = ({onDecrease, onIncrease, count}) => {

    return (
        <div className={styles.quantityBox}>
            <AiOutlinePlus style={{cursor: 'pointer'}} onClick={onIncrease}/>
            <div>
                            <span>
                                {
                                    count
                                }
                            </span>
            </div>
            <AiOutlineMinus
                style={{
                    cursor: 'pointer',
                    pointerEvents: (count === 1) ? 'none' : 'auto',
                    color: (count === 1) ? '#ebebeb' : '#0fabc6'
                }}
                onClick={onDecrease}
            />
        </div>
    );
};

export default QuantitySelector;