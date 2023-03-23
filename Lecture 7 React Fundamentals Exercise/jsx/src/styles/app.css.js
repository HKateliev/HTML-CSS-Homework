import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: "Bodoni", serif;
        font-size: 16px;
    }
`;
export const StyledImage = styled.img`
    width: ${(props) => `${props.width}px` || 'initial'};
    height: ${(props) => `${props.height}px` || 'initial'};
    cursor: ${(props) => props.cursor || 'inherit'};
`;

export const StyledInput = styled.input`
    width: 100%;
`;
