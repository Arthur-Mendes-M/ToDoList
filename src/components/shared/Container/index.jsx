import { StyledContainer } from "./styles"

export const Container = (props) => {
    return (
        <StyledContainer>{props.children}</StyledContainer>
    )
}