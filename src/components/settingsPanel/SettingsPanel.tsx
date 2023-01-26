import InputSeed from './inputSeed/InputSeed';
import SelectRegion from './selectRegion/SelectRegion';
import { Wrapper } from './SettingsPanel.styled';
import SliderMistakes from './SliderMistakes/SliderMistakes';

const SettingsPanel = () => {
    return (
        <Wrapper>
            <SelectRegion />
            <SliderMistakes />
            <InputSeed />
        </Wrapper>
    );
};

export default SettingsPanel;
