import React from 'react';
import Style from './Title_style.module.css';

// import { Trans } from 'react-i18next';



export const Title = (props) => {
    return (
        <div className={Style.title}>
            {props.title}
        </div>
    );
};

export const PopupTitle = (props) => {
    return (
        <div className={Style.popuptitle}>
            {props.title}
        </div>
    );
};