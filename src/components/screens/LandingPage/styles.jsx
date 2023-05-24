import { createGlobalStyle } from "styled-components";

export const StyledLanding = createGlobalStyle`
    body {
        background-color: ${props => props.theme.colors.primary};
    }
`