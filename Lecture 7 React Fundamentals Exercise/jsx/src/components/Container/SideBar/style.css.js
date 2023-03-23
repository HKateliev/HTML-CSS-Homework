import styled from 'styled-components';

export const StyledSideBarOption = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 80px;
    margin-bottom: 0px;
    cursor: pointer;
    background: ${(props) => props.background};
`;

export const StyledOptionLabel = styled.label`
    width: 50px;
    font-size: 12px;
    text-align: center;
    cursor: inherit;
`;
