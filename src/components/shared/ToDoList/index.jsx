import { ToDoContainer } from "./styled"

export const ToDoList = (props) => {

    return (
        <ToDoContainer>
            {props.children}
        </ToDoContainer>
    )
}