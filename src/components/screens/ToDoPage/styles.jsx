import { createGlobalStyle } from "styled-components";

export const StyledToDoPage = createGlobalStyle`
    body {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.secondary};
    }

    button {
        border-color: rgba(${props => props.theme.colorsA.secondary}, 0.5);
    }

    svg path {
        stroke: ${props => props.theme.colors.secondary};
    }
`