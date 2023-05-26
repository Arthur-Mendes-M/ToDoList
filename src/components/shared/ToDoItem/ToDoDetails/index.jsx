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

// <div className="toDoDetails">
    // <div className="title">
    //  <h5>{item.name}</h5>
    // </div>

    // <div className="description">
        // <p>{item.description}</p>
    // </div>
// </div> 