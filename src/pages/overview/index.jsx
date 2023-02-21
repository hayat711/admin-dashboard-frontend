import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, useTheme } from '@mui/material';
import { useGetSalesQuery } from '../../state/api';
import Header from '../../components/Header';


const Overview = () => {
    const {data, isLoading } = useGetSalesQuery();
    const [view, setView] = useState("units");


  return (
    <Box m='1.5rem 2.5rem'>
        <Header title="OVERVIEW"  subtitle="Overview of general revenue and profit" />
        <Box height="75vh">
            <FormControl sx={{ mt: "1rem"}}>
                <InputLabel>View</InputLabel>
                <Select value={view} label='View' onChange={(e) => setView(e.target.value)}>
                    <MenuItem value="sales">Sales</MenuItem>
                    <MenuItem value="units">Units</MenuItem>
                </Select>
            </FormControl>
            
            <OverviewChart view={view} />

        </Box>

    </Box>
  )
}

export default Overview