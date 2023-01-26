import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';

import { ApplicationContext } from '../../../context/context';
import { Wrapper } from './InputSeed.styled';

const InputSeed = () => {
    const { seed, onSetSeed } = useContext(ApplicationContext);

    const getSeed = () => {
        const newSeed = Math.random();
        onSetSeed(newSeed);
    };

    return (
        <Wrapper>
            <TextField
                label="Current Seed"
                type="number"
                size="small"
                value={seed}
                onChange={(value) => onSetSeed(+value.target.value)}
            />
            <Button variant="outlined" onClick={getSeed}>
                Random
            </Button>
        </Wrapper>
    );
};

export default InputSeed;
