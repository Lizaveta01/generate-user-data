import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MuiInput from '@mui/material/Input';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useContext } from 'react';

import { ApplicationContext } from '../../../context/context';

const Input = styled(MuiInput)`
    width: 42px;
`;

const SliderMistakes = () => {
    const { mistakes, onSetMistakes } = useContext(ApplicationContext);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        onSetMistakes(newValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSetMistakes(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const handleBlur = () => {
        if (mistakes < 0) {
            onSetMistakes(0);
        } else if (mistakes > 1000) {
            onSetMistakes(1000);
        }
    };

    return (
        <Box sx={{ width: 250 }}>
            <Typography id="input-slider" gutterBottom>
                Mistakes
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider
                        value={typeof mistakes === 'number' ? mistakes : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        step={1}
                        max={10}
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={mistakes}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 10,
                            min: 0,
                            max: 1000,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default SliderMistakes;
