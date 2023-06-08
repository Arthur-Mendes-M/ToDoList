import { styled } from "styled-components";
import { flexBox, transitions } from "../../../../styles/variables";

export const GlobalContainer = styled.div`
    ${flexBox('column', 'flex-start', undefined, 1)}
    position: absolute;
    max-width: 450px;
    left: 0;
    top: 0;

    transform: translate(0, calc(-100% + 45px));
    transition: ${transitions.allLinear};
`

export const MessageContainer = styled.div`
    ${flexBox('column', undefined, undefined, .5)}
    background-color: rgba(${props => props.theme.colorsA.secondary}, .2);
    backdrop-filter: blur(5px);
    box-shadow: 0 0 5px 2px rgba(${props => props.theme.colorsA.secondary}, .1);
    border-radius: 0.5rem;

    color: ${props => props.theme.colors.secondary};
    padding: 1.5rem 1rem;
`

export const TitleMessage = styled.h2`
    color: ${props => props.theme.colors.extraDanger};
`

export const DescriptionMessage = styled.p`
    font-size: .85rem;
    font-style: italic;
`

export const AlertButton = styled.button`
    border: none;
    border-radius: 0.5rem;
    color: ${props => props.theme.colors.primary};
    padding: .5rem;

    width: 45px;
    height: 45px;
    font-size: 1.3rem;

    &:hover, &:focus {
        color: ${props => props.theme.colors.terciary};

        background-color: rgba(${props => props.theme.colorsA.secondary}, .2);
        backdrop-filter: blur(5px);
        box-shadow: 0 0 5px 2px rgba(${props => props.theme.colorsA.secondary}, .1);
    }
`