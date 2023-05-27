import { Details, Title, Description } from "./styles"

export const ToDoDetails = ({title, description}) => {

    return (
        <Details>
            <Title>
                {title}
            </Title>

            <Description>
                {description}
            </Description>
        </Details>
    )
}