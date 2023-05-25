import { createGlobalStyle } from "styled-components";
import { flexBox, transitions } from "./variables";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 18px;
        transition: ${transitions.allLinearVQ};
    }

    body {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.secondary};
        padding: 5% 0;
    }

    #root {
        ${flexBox('column', undefined, undefined, 0.5)};
        text-align: center;
    }
`;

export { GlobalStyle };