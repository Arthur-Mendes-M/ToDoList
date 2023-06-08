import { styled } from "styled-components";
import { flexBox } from "../../../../styles/variables";

export const Details = styled.div`
    ${flexBox("column", "flex-start", undefined, undefined, undefined, "2 0 auto")}
    max-width: 100%;
`

export const Title = styled.div`
    font-weight: bold;
    max-width: 220px;
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Description = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    font-style: italic;
    max-width: 220px;
`