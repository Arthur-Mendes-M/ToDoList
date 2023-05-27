import { ToDoDetails } from "./ToDoDetails"
import { ToDoOptions } from "./ToDoOptions"
import { ToDoItemContainer } from "./styles"

export const ToDoItem = ({id, name, description}) => {

    return (
        <ToDoItemContainer>
            <ToDoDetails title={name} description={description}></ToDoDetails>
            <ToDoOptions toDoId={id}></ToDoOptions>
        </ToDoItemContainer>
    )
}