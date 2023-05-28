import { OptionsContainer } from "./styles"

import { DeleteButton } from "../../Buttons/DeleteButton"
import { AlterData } from "../../Buttons/AlterData"

export const ToDoOptions = (props) => {

    return (
        <OptionsContainer>
            <AlterData toDoId={props.toDoId}></AlterData>
            <DeleteButton toDoId={props.toDoId} deleteCallback={props.deleteCallback}></DeleteButton>
        </OptionsContainer>
    )
}