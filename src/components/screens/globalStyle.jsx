import { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`
    body {
        background-color: ${props => props.theme.main};
    }

    form {
        background-color: blue;
    }
`;

export { StyleGlobal };