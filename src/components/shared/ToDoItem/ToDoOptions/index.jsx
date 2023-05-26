import { OptionsContainer } from "./styles"

import { DeleteButton } from "../../Buttons/DeleteButton"
import { AlterData } from "../../Buttons/AlterData"

export const ToDoOptions = () => {

    return (
        <OptionsContainer>
            <AlterData></AlterData>
            <DeleteButton></DeleteButton>
        </OptionsContainer>
    )
}