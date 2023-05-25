import { styled } from "styled-components";

export const DelButton = styled.button`
    &.deleteButton {
        &.form {
            border-color: changeOpacity(var(--dangerRed-rgb), .5);
            color: changeOpacity(var(--color-rgb), .5);
    
            &:hover {
                border-color: var(--dangerRed-completeHexa);
                color: var(--dangerRed-completeHexa);
            }        
        }
    }
`