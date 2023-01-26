import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { CSVLink } from 'react-csv';
import InfiniteScroll from 'react-infinite-scroll-component';

import SettingsPanel from '../components/settingsPanel/SettingsPanel';
import UserTable from '../components/table/Table';
import { ApplicationContext } from '../context/context';
import { IUser } from '../models/IUser';
import { getUsers } from '../service/getUsers';
import { getCsv } from '../utils/generateCSV';
import { Wrapper } from './MainPage.styled';

const MainPage = () => {
    const { region, mistakes, seed } = useContext(ApplicationContext);
    const [data, setData] = useState<IUser[] | []>([]);
    const [isMoreData, setIsMoreData] = useState(true);

    useEffect(() => {
        getData();
    }, [region]);

    const getData = async () => {
        getUsers(region, 20).then((users) => setData(users));
    };

    const getDataMore = () => {
        getUsers(region).then((users) => setData([...data, ...users]));
    };

    return (
        <Wrapper>
            <SettingsPanel />
            <InfiniteScroll
                dataLength={data?.length}
                next={getDataMore}
                hasMore={isMoreData}
                loader={<h4 style={{ margin: '20px' }}>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center', margin: '20px 0' }}>
                        <b>You have seen it all</b>
                    </p>
                }
            >
                <UserTable data={data} />
            </InfiniteScroll>

            <CSVLink data={getCsv(data)}>
                <Button variant="outlined" className="save-table">
                    Get CSV
                </Button>
            </CSVLink>
        </Wrapper>
    );
};

export default MainPage;
