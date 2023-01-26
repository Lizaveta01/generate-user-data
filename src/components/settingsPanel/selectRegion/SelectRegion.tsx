import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import { useContext } from 'react';

import { ApplicationContext } from '../../../context/context';

const SelectRegion = () => {
    const { region, onSetRegion } = useContext(ApplicationContext);

    const handleChange = (event: SelectChangeEvent) => {
        onSetRegion(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 300 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Region</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={region}
                    label="Region"
                    onChange={handleChange}
                >
                    <MenuItem value="ca">Canada</MenuItem>
                    <MenuItem value="de">German</MenuItem>
                    <MenuItem value="au">Australia</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectRegion;
