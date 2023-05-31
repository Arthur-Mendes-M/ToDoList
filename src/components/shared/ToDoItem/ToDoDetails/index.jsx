import { Details, Title, Description } from "./styles"

export const ToDoDetails = ({title, description}) => {

    return (
        <Details>
            <Title title={title}>
                {title}
            </Title>

            <Description title={description}>
                {description}
            </Description>
        </Details>
    )
}