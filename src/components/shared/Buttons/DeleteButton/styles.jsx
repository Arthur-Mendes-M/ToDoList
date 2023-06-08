import { styled } from "styled-components";

export const DelButton = styled.button`
    border-color: rgba(${props => props.theme.colorsA.extraDanger}, .5);
    color: rgba(${props => props.theme.colorsA.extraDanger}, .5);
    flex: 1 0 auto;

    &:hover {
        border-color: ${props => props.theme.colors.extraDanger};
        color: ${props => props.theme.colors.extraDanger};
    }        
`