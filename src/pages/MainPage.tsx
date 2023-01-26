import Button from '@mui/material/Button';

import SettingsPanel from '../components/settingsPanel/Toolbar';
import UserTable from '../components/table/Table';
import { Wrapper } from './MainPage.styled';

const MainPage = () => {
    return (
        <Wrapper>
            <SettingsPanel />
            <UserTable data={[]} />
            <Button variant="outlined">Get CSV</Button>
        </Wrapper>
    );
};

export default MainPage;
