import { styled } from "styled-components";
import { flexBox } from "../../../styles/variables";

export const ToDoItemContainer = styled.div`
    ${flexBox(undefined, undefined, 'space-between', 1, 'wrap')}
    padding: .5rem 1rem;
    overflow: hidden;
`