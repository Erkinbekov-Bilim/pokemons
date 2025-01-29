import React from 'react';
import classes from "./DetailModal.module.css";

const DetailModal = ({children}) => {
    return (
        <>
            <div className={classes.modalWrapper}>

            </div>

            <div className={classes.modalContent}>
                {children}
            </div>
        </>
    );
};

export default DetailModal;