import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  & > div {
    border: 1px solid;
    padding: 10px;
    margin-right: 10px;
    flex: 1;
  }
`;
