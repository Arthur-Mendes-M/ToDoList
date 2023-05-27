import { ToDoDetails } from "./ToDoDetails"
import { ToDoOptions } from "./ToDoOptions"
import { ToDoItemContainer } from "./styles"

export const ToDoItem = ({id, name, description}) => {

    return (
        <ToDoItemContainer>
            {/* Create ToDoDetails and ToDoOptions components */}
            {/* <h1>{myKey}</h1> */}
            <ToDoDetails title={name} description={description}></ToDoDetails>
            <ToDoOptions toDoId={id}></ToDoOptions>
        </ToDoItemContainer>
    )
}