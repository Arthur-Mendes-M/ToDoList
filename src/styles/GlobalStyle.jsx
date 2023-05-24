import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.secondary};
    }
`;

export { GlobalStyle };