import { ToDoDetails } from "./ToDoDetails"
import { ToDoOptions } from "./ToDoOptions"
import { ToDoItemContainer } from "./styles"

export const ToDoItem = ({myKey, name, description}) => {

    return (
        <ToDoItemContainer key={myKey}>
            {/* Create ToDoDetails and ToDoOptions components */}
            {/* <h1>{myKey}</h1> */}
            <ToDoDetails title={name} description={description}></ToDoDetails>
            <ToDoOptions></ToDoOptions>
        </ToDoItemContainer>
    )
}