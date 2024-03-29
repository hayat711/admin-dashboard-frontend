import React from 'react';
import { GridColumnMenuContainer, GridFilterMenuItem, HideGridColMenuItem } from '@mui/x-data-grid';

const DataGridCustomColumnMenu = ({ hideMenu, currentColumn, open }) => {
    return (
        <GridColumnMenuContainer hideMenu={hideMenu} currentColumn={currentColumn} open={open}>
            <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
            <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
        </GridColumnMenuContainer>
    );
};

export default DataGridCustomColumnMenu;
