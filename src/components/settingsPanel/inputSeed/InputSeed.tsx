import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import { Wrapper } from './InputSeed.styled';

const InputSeed = () => {
    const [seed, setSeed] = useState(0);

    const getSeed = () => {
        const newSeed = Math.random();
        setSeed(newSeed);
    };

    return (
        <Wrapper>
            <TextField
                label="Current Seed"
                type="number"
                size="small"
                value={seed}
                onChange={(value) => setSeed(value as unknown as number)}
            />
            <Button variant="outlined" onClick={getSeed}>
                Random
            </Button>
        </Wrapper>
    );
};

export default InputSeed;
