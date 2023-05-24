import { createGlobalStyle } from "styled-components";

export const StyledErrorPage = createGlobalStyle`
    body {
        color: ${props => props.theme.colors.terciary};
    }
`