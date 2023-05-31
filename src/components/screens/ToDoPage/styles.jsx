import { createGlobalStyle } from "styled-components";

export const StyledToDoPage = createGlobalStyle`
    button {
        border-color: rgba(${props => props.theme.colorsA.secondary}, 0.5);
        
        &.changeButton {
            width: 100%;
        }
    }

    svg path {
        stroke: ${props => props.theme.colors.secondary};
    }

    main {
        width: 100%;
        max-width: 600px;
    }
`