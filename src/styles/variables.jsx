import { css } from "styled-components"

export const flexBox = (
    flexDirection = 'row', 
    alignItens = 'center', 
    justifyContent = 'center', 
    gap = 0,
    flexWrap = 'nowrap',
    flex = '0 0 auto'
    ) => css`
        display: flex;
        flex-direction: ${flexDirection};
        align-items: ${alignItens};
        justify-content: ${justifyContent};
        gap: ${gap}rem;
        flex-wrap: ${flexWrap};
        flex: ${flex};
`

export const transitions = {
    allLinear: "all .25s linear",
    allLinearQ: "all .15s linear",
    allLinearVQ: "all .05s ease-out"
}