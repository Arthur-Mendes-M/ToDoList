import { css, styled } from "styled-components";
import { flexBox } from "../../../styles/variables";

export const StyledToDoContainer = styled.div`
    ${flexBox("column", "unset", "unset", 1)}
    width: 80%;
    max-width: 500px;
    padding: 1.5rem;
    border: 1px solid rgba(${props => props.theme.colorsA.secondary}, 0.5);
    border-radius: .3rem;
`