import InputSeed from './inputSeed/InputSeed';
import BasicSelect from './select/Select';
import SliderMistakes from './slider/Slider';
import { Wrapper } from './ToolBar.styled';

const SettingsPanel = () => {
    return (
        <Wrapper>
            <BasicSelect />
            <SliderMistakes />
            <InputSeed />
        </Wrapper>
    );
};

export default SettingsPanel;
