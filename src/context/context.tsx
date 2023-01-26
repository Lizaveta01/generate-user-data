import React, { createContext, useState } from 'react';

type Props = {
    children?: JSX.Element | JSX.Element[];
};

interface IContext {
    region: string;
    onSetRegion: (value: string) => void;
    mistakes: number | string | Array<number | string>;
    onSetMistakes: (value: number | string | Array<number | string>) => void;
    seed: number;
    onSetSeed: (value: number) => void;
}

export const ApplicationContext = createContext({} as IContext);

export const ApplicationProvider = (props: Props) => {
    const [region, setRegion] = useState('ca');
    const [mistakes, setMistakes] = useState<number | string | Array<number | string>>(0);
    const [seed, setSeed] = useState(0);

    const onSetRegion = (value: string) => {
        setRegion(value);
    };

    const onSetMistakes = (value: number | string | Array<number | string>) => {
        setMistakes(value);
    };

    const onSetSeed = (value: number) => {
        setSeed(value);
    };

    return (
        <ApplicationContext.Provider
            value={{
                region: region,
                onSetRegion,
                mistakes: mistakes,
                onSetMistakes,
                seed: seed,
                onSetSeed,
            }}
        >
            {props.children}
        </ApplicationContext.Provider>
    );
};
