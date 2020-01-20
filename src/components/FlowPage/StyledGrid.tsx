import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

export const StyledGrid = withStyles({

})(Grid);

export const StyledTitleGridBorder = withStyles({
    item: {
        textAlign: 'right',
        paddingRight: '5px',
        border: '1px solid #ddd',
        backgroundColor: '#efefef',
        fontSize: '1rem',
        fontWeight: "bold",
    }
})(Grid);

export const StyledGridBorder = withStyles({
    item: {
        border: '1px solid #ddd',
        paddingLeft: '5px',
    }
})(Grid);

type GridSize = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
interface GridProportionProps {
    xs: {
        titlecols: GridSize,
        contentcols: GridSize,
        contentlongcols: GridSize,
    },
    sm: {
        titlecols: GridSize,
        contentcols: GridSize,
        contentlongcols: GridSize,
    }
}
export const GridProportion:GridProportionProps = {
    xs: {
        titlecols: 4,
        contentcols: 8,
        contentlongcols: 8,
    },
    sm: {
        titlecols: 2,
        contentcols: 4,
        contentlongcols: 10,
    }

}
