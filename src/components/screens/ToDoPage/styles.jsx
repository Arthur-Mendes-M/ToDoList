import { createGlobalStyle } from "styled-components";

export const StyledToDoPage = createGlobalStyle`
    body {
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.primary};
    }

    button {
        border-color: ${props => props.theme.colors.primary};
    }

    svg path {
        stroke: ${props => props.theme.colors.primary};
    }
`