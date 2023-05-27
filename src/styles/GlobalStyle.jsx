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

    /* Resets */

    a {
        text-decoration-color: rgba(${props => props.theme.colorsA.secondary}, .5);
        color: ${props => props.theme.colors.secondary};
        transition: ${transitions.allLinearQ};

        &:hover {
            transform: scale(1.05);
            text-decoration-color: ${props => props.theme.colors.terciary};        
        }
    }

    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    svg {
        width: 20px;
        transition: ${transitions.allLinear};
    }

    button {
        background: none;
        border: 1px solid rgba(${props => props.theme.colorsA.secondary}, .5);
        border-radius: .5rem;
        padding: .5rem 1.5rem;
        color: rgba(${props => props.theme.colorsA.secondary}, .5);
        cursor: pointer;
        transition: ${transitions.allLinear};

        &:hover {
            border-color: ${props => props.theme.colors.secondary};
            color: ${props => props.theme.colors.secondary};
        }
    }

    .field {
        ${flexBox(undefined, undefined, undefined, 1, 'wrap')}
        width: 100%;
    }

    input, textarea {
        width: 100%;
        background: none;
        border: 1px solid rgba(${props => props.theme.colorsA.secondary}, .5);
        border-radius: .5rem;
        padding: .5rem 1rem;
        color: rgba(${props => props.theme.colorsA.secondary}, .5);
        cursor: pointer;
        transition: ${transitions.allLinear};

        &:hover, &:focus {
            border-color: ${props => props.theme.colors.secondary};
            color: ${props => props.theme.colors.secondary};
        }

        &.submitInput {
            border: 1px solid rgba(${props => props.theme.colorsA.terciary}, .5);

            &:hover, &:focus {
                border-color: ${props => props.theme.colors.terciary};
                box-shadow: 0 0 10px 3px rgba(${props => props.theme.colorsA.terciary}, .2);
            }
        }
    }

    textarea {
        min-height: 120px;
        resize: none;
    }
`;

export { GlobalStyle };