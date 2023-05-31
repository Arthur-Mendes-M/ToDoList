import { StyledToDoContainer } from "./styled"

export const ToDoListContainer = (props) => {

    return (
        <StyledToDoContainer>
            {props.children}
        </StyledToDoContainer>
    )
}