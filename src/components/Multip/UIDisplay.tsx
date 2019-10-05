import React from 'react'
// material
import Paper from "@material-ui/core/Paper";
import color from '@material-ui/core/colors/orange';

export const UIDisplay: React.FC<any> = (props) => {

    const { title, content } = props;
    const titleStyle: any = {
        color: '#FFF',
        backgroundColor: '#2196f3',
        fontWeight: 'bold',
        position: 'relative',
        textAlign: 'center',
        marginLeft: '6px',
        marginBottom: '-18px',
        padding: '6px 12px 6px 12px',
        zIndex: '10',
        fontSize: '1.17rem',

    };

    const contentStyle: any = {
        position: 'relative',
        zIndex: '5',
        padding: '24px 12px 6px 24px',
        // backgroundColor: '#f8ff92',
    }

    return (
        <div>
            <Paper style={titleStyle}>
                {title}
            </Paper>
            <Paper style={contentStyle}>
                {content}
            </Paper>
        </div>
    )
}

export default UIDisplay;
