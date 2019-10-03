import React from 'react';

import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const StyledButtonConfirm = withStyles({
    root: {
        fontSize: '0.875rem',
        fontFamily: "MSBlack, Microsoft JhengHei, 微軟正黑體",
        borderRadius: '0px',
        width: '64px',
        background: '-webkit-linear-gradient(top, #f4ece1, #ddd1bb)',
        border: '1px solid #ddd1bb',
        '&:hover': {
            border: '1px solid #b52912',
            background: '#b52912',
            color: '#ddd1bb',
        },
    }
})(Button);

export const StyledButtonCancel = withStyles({
    root: {
        borderRadius: '0px',
        fontSize: '0.875rem',
        fontFamily: "MSBlack, Microsoft JhengHei, 微軟正黑體",
        width: '64px',
        backgroundColor: '#fff',
        color: '#444',
        border: '1px solid transparent',
        borderColor: '#ccc',
        '&:hover': {
            border: '1px solid gray',
            background: 'white',
        },
    }
})(Button);

export const StyledAreaFuctionButton = withStyles({
    root: {
        borderRadius: '0px',
        border: '1px solid #ddd1bb',
        fontSize: '0.875rem',
        fontFamily: "MSBlack, Microsoft JhengHei, 微軟正黑體",
        '&:hover': {
            background: '#e6e6e6',
        },
    }
})(Button);

export default class StyledButton extends React.Component {

}