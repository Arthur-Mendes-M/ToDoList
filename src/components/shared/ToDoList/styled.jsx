import { css, styled } from "styled-components";
import { changeOpacity } from "../../../styles/variables";

export const StyledToDoContainer = styled.div`
    width: 80%;
    max-width: 500px;
    padding: 1rem;
    border: 1px solid rgba(${props => props.theme.colorsA.secondary}, 0.5);
    border-radius: .3rem;
`