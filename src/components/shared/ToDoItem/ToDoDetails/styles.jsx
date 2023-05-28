import { styled } from "styled-components";
import { flexBox } from "../../../../styles/variables";

export const Details = styled.div`
    ${flexBox("column", "flex-start")}
    max-width: 100%;
`

export const Title = styled.div`
    font-weight: bold;
    max-width: 200px;
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Description = styled.p`
    font-style: italic;
    max-width: 200px;
`