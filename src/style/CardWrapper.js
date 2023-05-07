import styled from 'styled-components';

export const CardWrapper = styled.div`
    background-color: ${props => props.bgColor ?? '#c7b2b2'};
    margin: 10px;
    padding: 16px;
    border-radius: 10px;
`;
