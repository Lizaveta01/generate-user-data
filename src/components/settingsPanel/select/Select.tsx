import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';

const BasicSelect = () => {
    const [region, setRegion] = React.useState('Canada');

    const handleChange = (event: SelectChangeEvent) => {
        setRegion(event.target.value as string);
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
                    <MenuItem value="Canada">Canada</MenuItem>
                    <MenuItem value="German">German</MenuItem>
                    <MenuItem value="Spain">Spain</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default BasicSelect;
