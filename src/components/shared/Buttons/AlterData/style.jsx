import { styled } from "styled-components";

const Button = styled.button`
    &.prevButton {
        &.history {
            &:hover svg {
                transform: rotate(-360deg);
            }
        }
    }
`;

export {Button}