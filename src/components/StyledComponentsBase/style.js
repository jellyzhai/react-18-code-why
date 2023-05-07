import styled from 'styled-components';

export const DivWrapper = styled.div`
    border: 1px solid skyblue;

    h2 {
        color: pink;

        &:hover {
            background-color: purple;
        }
    }

    .contents {
        font-size: 20px;
        color: green;
    }

    .footer { 
        font-size: 25px;
        color: blue;
    }
`;

export const CardWrapper = styled.div`
    background-color: ${props => props.bgColor ?? '#eee'};
    margin: 10px;
    padding: 16px;
    border-radius: 10px;
`;

export const BgWrapper = styled.div`
    margin-top: 10px;
    background-color: ${props => props.theme.nightBgColor ?? '#eee'};
`;

export const DayNightWrapper = styled.div`
    background-color: ${props => props.dayNightTHeme.bgColor ?? '#eee'};
    color: ${props => props.dayNightTHeme.fontColor ?? '#eee'};
`;
