import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 320px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width: 500px) {
        width: 280px;
    }
`;
