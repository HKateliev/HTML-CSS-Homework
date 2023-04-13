import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: "Bodoni", serif;
        font-size: 16px;
        width: 100vw;
        height: 100vh;
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export const StyledInput = styled.input`
  width: 100%;
`;
