import { styled } from "styled-components";

const AbsoluteTopLeftContainer = styled.div`
    width: fit-content;
    height: fit-content;
    position: absolute;
    inset: 0;
    top: 2rem;
    left: 2rem;
`

const PrevButton = styled.button`
    &.prevButton {
        &.history {
            &:hover svg {
                transform: rotate(-360deg);
            }
        }
    }
`

export { AbsoluteTopLeftContainer, PrevButton }